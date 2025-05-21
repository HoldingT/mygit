// components/Header.tsx
// 나중에 삭제
import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#004aad",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      <h2 style={{ margin: 0 }}></h2>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link href="/" style={{ color: "white" }}>서비스 안내</Link>
        <Link href="/participate" style={{ color: "white" }}>참여하기</Link>
        <Link href="/mypage" style={{ color: "white" }}>마이페이지</Link>
        <Link href="/login" style={{ color: "white" }}>로그인</Link>
        <Link href="/register" style={{ color: "white" }}>회원가입</Link>
      </nav>
    </header>
    
  );
}
