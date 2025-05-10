import Header from "../components/Header";
import { useState } from "react";

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
      <div className="div-wrapper" style={{ padding: "60px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ borderBottom: "3px solid #6fb4d6", display: "inline-block", paddingBottom: "6px" }}>
            마이페이지
          </h2>
        </div>

        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <img
            src="/img/user-placeholder.png"
            alt="사용자"
            width={80}
            height={80}
            style={{ borderRadius: "50%", marginBottom: "10px" }}
          />
          <div>
            <strong>{userName}</strong>
            <span style={{ marginLeft: "6px", cursor: "pointer" }}>✏️</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
          {favorites.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "12px",
                padding: "20px",
                width: "220px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              <p>시설명: {item.facility}</p>
              <p>강의실명: {item.room}</p>
              <p>참여일자: {item.date}</p>
              <p>참여시간: {item.time}</p>
              <p>참여인원: {item.users}명</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
