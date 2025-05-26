import Header from "../components/Header";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function RegisterPage() {
  const [userType, setUserType] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [nm, setUserName] = useState("");
  const [pw2, setPw2] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    
    // 1. 모든 항목을 받는지 확인
    if (!id || !pw || !pw2 || !nm || !userType) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    // 2. 비밀번호 확인 체크
    if (pw !== pw2) {
      setPasswordMatchError(true);
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
      
    // 3. 서버 요청
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: id,
          password: pw,
          name: nm,
          user_type: userType,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("회원가입 성공!");
        router.push("/");
      } else {
        alert(`회원가입 실패: ${result.message}`);
      }
    } catch (error) {
      alert("에러 발생: " + error);
    }
  };

  return (
    <>
      <Header />
      <div className="div-wrapper">
        <div className="div">
          <div className="overlap">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="rectangle-6" />
            <div className="rectangle-7" />
            <div className="screen">
              <div className="soverlap">
                <div className="soverlap-2">
                  
                  <div className="stext-wrapper-2">이&nbsp;&nbsp;름</div>
                  <input
                    className="srectangle-2"
                    type="text"
                    value={nm}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div className="stext-wrapper">아이디</div>
                <input
                    className="srectangle"
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
    
                <div className="sdiv">비밀번호</div>
                <input
                    className="srectangle-3"
                    type="password"
                    value={pw}
                    onChange={(e) => {setPw(e.target.value); setPasswordMatchError(false);}}
                />
                
                <div className="soverlap-3">
                  <input
                    className="srectangle-4"
                    type="password"
                    value={pw2}
                    onChange={(e) => {setPw2(e.target.value); setPasswordMatchError(false);}}
                  />
                  {passwordMatchError && (
                    <p style={{ color: "red", fontSize: "14px" }}>
                      비밀번호가 일치하지 않습니다.
                    </p>
                  )}
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
                  <button className="stext-wrapper-7" type="button" onClick={handleRegister}>
                    완&nbsp;&nbsp;료
                  </button>
                </div>

                <div className="soverlap-group" style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "40px", marginBottom: "20px",}}>
                <div
                  className="user-type-options"
                  style={{ display: "flex", justifyContent: "center", gap: "70px", marginBottom: "5px" }}
                  >
                  {["undergraduate", "postgraduate", "staff"].map((type) => (
                  <label
                    key={type}
                    style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}
                  >
                    <input
                      type="radio"
                      name="userType"
                      checked={userType === type}
                      onChange={() => setUserType(type)}
                      style={{ marginRight: "8px" }}
                    />
                    {type === "undergraduate" ? "학부생" : type === "postgraduate" ? "대학원생" : "교직원"}
                  </label>
                ))}
                </div>
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
        </div>
      </div>
    </>
  );
}
