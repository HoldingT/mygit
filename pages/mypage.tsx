// pages/mypage.tsx
import Header from "../components/Header";
import Link from "next/link";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getUserIdFromCookie } from "../pages/api/api-utils";
import mysql from "mysql2/promise";
import type { RowDataPacket } from "mysql2";

interface Favorite {
  facility: string;
  room: string;
  date: string;   // YYYY-MM-DD
  time: string;   // HH:MM ~ HH:MM
  users: number;
}

interface Props {
  userId: string;
  favorites: Favorite[];
}

export default function MyPage({ userId, favorites }: Props) {
  return (
    <>
      <Header />
      <div className="div-wrapper">
        <div className="div">
          <div className="overlap">
            <div className="rectangle-6" />
            <div className="rectangle-7" />
            {/* 마이페이지 타이틀 */}
            <h2 className="mypage-title">마이페이지</h2>
            <div className="mypage-underline"></div>
            {/* 프로필 이미지 및 이름 */}
              <div className="profile-container">
                <div className="profile-placeholder" />
                <p>사용자 : {userId}</p>
              </div>

            {/* 즐겨찾기 제목 */}
            <h3 className="favorites-title">즐겨찾기</h3>
            {favorites.length === 0 ? (
            <p>즐겨찾기 항목이 없습니다.</p>
            ) : (
            <div className="favorites-grid">
              {favorites.map((fav) => (
                <Link
                  key={`${fav.facility}-${fav.room}-${fav.date}-${fav.time}`}
                  href={`/rooms/${fav.room}`}
                  legacyBehavior
                  passHref
                >
                  <a className="favorite-card">
                    <div className="card-row">
                      <span className="label">시설명</span>
                      <span className="value">{fav.facility}</span>
                    </div>
                    <div className="card-row">
                      <span className="label">강의실명</span>
                      <span className="value">{fav.room}호</span>
                    </div>
                    <div className="card-row">
                      <span className="label">참여일자</span>
                      <span className="value">{fav.date}</span>
                    </div>
                    <div className="card-row">
                      <span className="label">참여시간</span>
                      <span className="value">{fav.time}</span>
                    </div>
                    <div className="card-row">
                      <span className="label">현재 인원수</span>
                      <span className="value">{fav.users}명</span>
                    </div>
                  </a>
              </Link>
            ))}
            {/* 이름/비밀번호 수정 */}
            <p className="user-name">{userId}</p>
            <Link href="/change">
              <a className="change-info-link">개인정보 수정</a>
            </Link>
          </div>
        )}
          </div>
        </div>
      </div>
    </>
  );
}

/*로그인 여부*/
export const getServerSideProps: GetServerSideProps<Props> = async (
  context: GetServerSidePropsContext
) => {
  const userId = getUserIdFromCookie(context.req);
  if (!userId) {
    return {
      redirect: { destination: "/login", permanent: false },
    };
  }
  /*MySQL DB연결*/
  const conn = await mysql.createConnection(process.env.DATABASE_URL!);

  type Row = RowDataPacket & {
    building: string;
    room: string;
    start_time: string;
    end_time: string;
    participant_count: number;
    favorited_at: Date | string;
  };

  const [rows] = await conn.execute<Row[]>(
    `
      SELECT
        lr.building,
        lr.room,
        uf.start_time,
        uf.end_time,
        uf.participant_count,
        uf.favorited_at
      FROM user_favorite uf
      JOIN lecture_room lr
        ON uf.classId = lr.classId
      WHERE uf.user_id = ?
      ORDER BY uf.favorited_at DESC
    `,
    [userId]
  );

  await conn.end();

  const favorites: Favorite[] = rows.map((r) => {
    const iso =
      typeof r.favorited_at === "string"
        ? new Date(r.favorited_at).toISOString()
        : r.favorited_at.toISOString();

    return {
      facility: r.building,
      room: r.room,
      date: iso.slice(0, 10),
      time: `${r.start_time.slice(0, 5)} ~ ${r.end_time.slice(0, 5)}`,
      users: r.participant_count,
    };
  });

  return { props: { userId, favorites } };
};
