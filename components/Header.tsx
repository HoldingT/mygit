// components/Header.tsx
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
  fetch("/api/me", {
    credentials: "include", // 쿠키 포함
  })
    .then((res) => res.json())
    .then((data) => {
        if (data.success) setUser(data.user);
      });
}, []);

  const handleLogout = async () => {
    await fetch("/api/logout", {
      method: "POST",
      credentials: "include",
    });

    setUser(null);
    window.location.href = "/login"; // 로그아웃 후 이동
  };

  return (
    <div className="header-wrapper">
      <div className="overlap-7">
        <p className="y-class">
          연세대학교 미래캠퍼스 강의실 찾기 서비스&nbsp;&nbsp;|&nbsp;&nbsp;Y class
        </p>
        <p className="text-wrapper-10">
          Yonsei University Mirae Campus Classroom Finder Service
        </p>
        <img className="group" src="/img/group-8824.png" alt="logo" />
      </div>

      <div className="overlap-wrapper">
        <div className="overlap-9">
          <div className="group-2">
            <div className="overlap-group-3">
              <div className="rectangle-8"></div>
              {user ? (
                <div
                  className="text-wrapper-19"
                  style={{ cursor: "pointer" }}
                  onClick={handleLogout}
                >
                  로그아웃
                </div>
              ) : (
                <Link href="/login" passHref>
                  <div className="text-wrapper-12" style={{ cursor: "pointer" }}>
                    로그인
                  </div>
                </Link>
              )}
            </div>
            <div className="rectangle-9"></div>
          </div>
          <div className="text-wrapper-13">English</div>
        </div>
      </div>

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
      <div className="rectangle-20"></div>
    </div>
  );
}

