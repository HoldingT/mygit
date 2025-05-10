import { useState } from "react";
import Header from "../components/Header";

export default function RegisterPage() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const handleRegister = () => {
    if (!id || !pw || !confirmPw) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    if (pw !== confirmPw) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    alert(`회원가입 시도\nID: ${id}`);
  };

  return (
    <div style={{ padding: "60px", textAlign: "center" }}>
      <h1>회원가입</h1>
      <input
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
        style={{ padding: "10px", marginBottom: "10px", width: "200px" }}
      />
      <br />
      <input
        type="password"
        placeholder="비밀번호"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        style={{ padding: "10px", marginBottom: "10px", width: "200px" }}
      />
      <br />
      <input
        type="password"
        placeholder="비밀번호 확인"
        value={confirmPw}
        onChange={(e) => setConfirmPw(e.target.value)}
        style={{ padding: "10px", width: "200px" }}
      />
      <br />
      <button
        onClick={handleRegister}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        회원가입
      </button>
    </div>
  );
}