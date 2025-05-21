import Header from "../components/Header";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="div-wrapper">
        <div className="div">
          <div className="overlap">
            {/* 참여현황 타이틀 */}
            <h2 className="mypage-title">참여현황</h2>
            <div className="mypage-underline"></div>
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