import Header from "../components/Header";
import { useState } from "react";
import Link from "next/link";

export default function MyPage() {
  const [userName, setUserName] = useState("박학생");

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
            {/* 마이페이지 타이틀 */}
            <h2 className="mypage-title">마이페이지</h2>
            <div className="mypage-underline"></div>
            {/* 프로필 이미지 및 이름 */}
              <div className="profile-container">
                <div className="profile-name">박학생 ✏️</div>
              </div>

          {/* 즐겨찾기 카드 */}
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
        {/* 기본 홈페이지 코드 통합 */}
          <div className="overlap-7">
            <p className="y-class">
              연세대학교 미래캠퍼스 강의실 찾기 서비스&nbsp;&nbsp;|&nbsp;&nbsp;Y class
            </p>
            <p className="text-wrapper-10">
              Yonsei University Mirae Campus Classroom Finder Service
            </p>
            <img className="group" src="/img/group-8824.png" alt="로고" />
          </div>

          <div className="rectangle-6" />
          <div className="rectangle-7" />

          <div className="overlap-8">
            <div className="text-wrapper-11">이미지1</div>
          </div>

          <div className="overlap-wrapper">
            <div className="overlap-9">
              <div className="group-2">
                <div className="overlap-group-3">
                  <div className="rectangle-8"></div>
                  <Link href="/login" passHref>
                    <div className="text-wrapper-12" style={{ cursor: "pointer" }}>
                      로그인
                    </div>
                  </Link>
                </div>
                <div className="rectangle-9"></div>
              </div>
              <div className="text-wrapper-13">English</div>
            </div>
          </div>

          <div className="text-wrapper-14">간격<br />참고<br />라인</div>
          <div className="text-wrapper-15">간격<br />참고<br />라인</div>
          <Link href="/" passHref>
            <div className="text-wrapper-16" style={{ cursor: "pointer" }}>
              서비스 안내
            </div>
          </Link>
          <Link href="/participate" passHref>
            <div className="text-wrapper-17" style={{ cursor: "pointer" }}>
              참여하기
            </div>
          </Link>
          <Link href="/mypage" passHref>
            <div className="text-wrapper-18" style={{ cursor: "pointer" }}>
              마이페이지
            </div>
          </Link>
        </div>
      </div>

      
    </>
  );
}
