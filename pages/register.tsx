import Header from "../components/Header";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [userType, setUserType] = useState("학부생");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [nm, setUserName] = useState("");
  const [pw2, setPw2] = useState("");

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
            <div className="rectangle-2" />
            <div className="screen">
              <div className="soverlap">
                <div className="stext-wrapper">아이디</div>
                <input
                    className="srectangle"
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
    
                <div className="soverlap-2">
                  <div className="stext-wrapper-2">이&nbsp;&nbsp;름</div>
                  <input
                    className="srectangle-2"
                    type="text"
                    value={nm}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div className="sdiv">비밀번호</div>
                <input
                    className="srectangle-3"
                    type="password"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                />

                <div className="soverlap-3">
                  <input
                    className="srectangle-4"
                    type="password2"
                    value={pw2}
                    onChange={(e) => setPw2(e.target.value)}
                  />
                  <p className="sp">
                    영어 대소문자 a-z, 숫자 0-9, 특수문자 포함 20자 이내
                  </p>
                </div>
                <div className="stext-wrapper-3">비밀번호 확인</div>
                

                <div className="stext-wrapper-4">비밀번호 재입력</div>
                <div className="stext-wrapper-5">한글 이름을 입력해주세요</div>
                <p className="stext-wrapper-6">
                  영어 대소문자 a-z, 숫자 포함 20자 이내
                </p>

                <div className="sdiv-wrapper">
                  <div className="stext-wrapper-7">완&nbsp;&nbsp;료</div>
                </div>

                <div className="soverlap-group" style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "40px", marginBottom: "20px",}}>
                <label className="stext-wrapper-8" style={{display: "flex", justifyContent: "row", alignItems: "center", whiteSpace:"nowrap"}}>
                  <input
                    type="radio"
                    name="userType"
                    checked={userType === "학부생"}
                    onChange={() => setUserType("학부생")}
                    style={{ marginRight: "8px" }}
                  />
                  학부생
                </label>
                <label className="stext-wrapper-9"style={{display: "flex", justifyContent: "row", alignItems: "center", whiteSpace:"nowrap"}}>
                  <input
                    type="radio"
                    name="userType"
                    checked={userType === "대학원생"}
                    onChange={() => setUserType("대학원생")}
                    style={{ marginRight: "8px" }}
                  />
                  대학원생
                </label>
                <label className="stext-wrapper-10"style={{display: "flex", justifyContent: "row", alignItems: "center", whiteSpace:"nowrap"}}>
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

                <div className="stext-wrapper-11">회원가입</div>

                <div className="soverlap-wrapper">
                 <div className="soverlap-4">
                   <div className="srectangle-5"></div>
                  </div>
                </div>
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
