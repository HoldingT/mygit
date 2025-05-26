import Header from "../components/Header";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [userType, setUserType] = useState("학부생");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // 쿠키 포함
        body: JSON.stringify({ 
          userId: id,
          password: pw }),
      });
      
      const result = await response.json();

      if (response.ok) {
        alert("로그인 성공!");
        router.push("/");
      } else {
        alert("로그인 실패")
      }
    } catch (err) {
      console.error(err);
      setError("아이디 또는 비밀번호가 올바르지 않습니다.");
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

            <div className="frame">
              <div className="overlap-group" style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "40px", marginBottom: "20px",}}>
                <div
                  className="user-type-options"
                  style={{ display: "flex", justifyContent: "center", gap: "40px", marginBottom: "5px" }}
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
                <button className="LOG-IN-wrapper" type="button" onClick={handleLogin}>
                  <span className="LOG-IN">
                    LOG<br />IN
                  </span>
                </button>  
              </div>
              
              <div className="overlap-4">
                <Link href="/register">
                  <div className="text-wrapper-8" style={{ cursor: "pointer" }}>
                    회원가입하기
                  </div>
                </Link>
              </div>

              <div className="overlap-5">
                <Link href="/register">
                  <div className="text-wrapper-9" style={{ cursor: "pointer" }}>
                    아이디/비밀번호 찾기
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
