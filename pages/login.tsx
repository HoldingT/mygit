import Header from "../components/Header";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [userType, setUserType] = useState("학부생");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLogin = () => {
    alert(`유형: ${userType}\nID: ${id}\nPW: ${pw}`);
  };

  return (
    <>
      <Header />
      <div className="div-wrapper">
        <div className="div">
          <div className="overlap">
            <div className="rectangle" />
            <div className="text-wrapper">서비스 소개</div>
            <div className="text-wrapper-2">이미지2</div>
            <div className="rectangle-2" />

            <div className="frame">
              <div className="overlap-group" style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "40px", marginBottom: "20px",}}>
                <label className="text-wrapper-3" style={{display: "flex", justifyContent: "row", alignItems: "center", whiteSpace:"nowrap"}}>
                  <input
                    type="radio"
                    name="userType"
                    checked={userType === "학부생"}
                    onChange={() => setUserType("학부생")}
                    style={{ marginRight: "8px" }}
                  />
                  학부생
                </label>
                <label className="text-wrapper-4"style={{display: "flex", justifyContent: "row", alignItems: "center", whiteSpace:"nowrap"}}>
                  <input
                    type="radio"
                    name="userType"
                    checked={userType === "대학원생"}
                    onChange={() => setUserType("대학원생")}
                    style={{ marginRight: "8px" }}
                  />
                  대학원생
                </label>
                <label className="text-wrapper-5"style={{display: "flex", justifyContent: "row", alignItems: "center", whiteSpace:"nowrap"}}>
                  <input
                    type="radio"
                    name="userType"
                    checked={userType === "교직원"}
                    onChange={() => setUserType("교직원")}
                    style={{ marginRight: "8px" }}
                  />
                  교직원
                </label>
              </div>

              <div className="overlap-2">
                <div className="overlap-3">
                  <div className="text-wrapper-6">아이디</div>
                  <input
                    className="rectangle-3"
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>
                <div className="text-wrapper-7">비밀번호</div>
                <input
                  className="rectangle-4"
                  type="password"
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                />
                <div className="LOG-IN-wrapper" onClick={handleLogin}>
                  <div className="LOG-IN">LOG<br />IN</div>
                </div>
              </div>

              <div className="overlap-4">
                <div className="text-wrapper-8">회원가입하기</div>
              </div>
              <div className="overlap-5">
                <div className="text-wrapper-9">아이디/비밀번호 찾기</div>
              </div>

            </div>
          </div>

          <div className="overlap-7">
            <p className="y-class">
              연세대학교 미래캠퍼스 강의실 찾기 서비스&nbsp;&nbsp;|&nbsp;&nbsp;Y class
            </p>
            <p className="text-wrapper-10">
              Yonsei University Mirae Campus Classroom Finder Service
            </p>
            <img className="group" src="/img/group-8824.png" />
          </div>

          <div className="rectangle-6" />
          <div className="rectangle-7" />

          <div className="overlap-8">
            <div className="text-wrapper-11"></div>
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
