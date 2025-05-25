import Header from "../components/Header";
import { useState } from "react";
import Link from "next/link";
import { GetServerSidePropsContext } from "next";
import { getUserIdFromCookie } from "../pages/api/api-utils";

interface Props {
  userId: string;
}

export default function MyPage({ userId }: Props) {
  const [userName, setUserName] = useState("");
  
  const favorites = [
    {
      facility: "참초관",
      room: "408",
      date: "2025-04-28",
      time: "17:00 ~ 19:00",
      users: 1,
    },
    {
      facility: "참초관",
      room: "410",
      date: "2025-04-29",
      time: "17:00 ~ 22:00",
      users: 1,
    },
  ];

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

          {/* 즐겨찾기 카드 */}
          <div className="profile-name">즐겨찾기</div>
          <div className="favorites">
            <div className="favorite-card">
              <div>시설명: 창조관</div>
              <div>층수: 4층</div>
              <div>강의실명: 408호</div>
              <div>참여일자: 2025-04-29</div>
              <div>참여시간: 17:00 - 22:00</div>
              <div>현재 인원수: 1명</div>
            </div>
            <div className="favorite-card">
              <div>시설명: 신뢰관</div>
              <div>층수: 3층</div>
              <div>강의실명: 312호</div>
              <div>참여일자: 2025-04-29</div>
              <div>참여시간: 17:00 - 22:00</div>
              <div>현재 인원수: 1명</div>
            </div>
          </div>
          </div>
        </div>
      </div>

      
    </>
  );
}

/*
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const userId = getUserIdFromCookie(context.req);

  if (!userId) {
    // 로그인하지 않은 경우 /login으로 리다이렉트
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      userId,
    },
  };
}
  */