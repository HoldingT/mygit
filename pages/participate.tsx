import { useState } from "react";
import Header from "../components/Header";

export default function ParticipatePage() {
  const [date, setDate] = useState("2025-04-29");
  const [facility, setFacility] = useState("");
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("22:00");

  const sampleData = [
    {
      building: "참초관",
      floor: "4층",
      room: "408",
      capacity: 60,
      available: "17:00 ~ 22:00",
    },
  ];

  return (
    <>
      <Header />
      <div style={{ padding: "40px" }}>
        <h1>참여현황</h1>

        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <select value={facility} onChange={(e) => setFacility(e.target.value)}>
            <option value="">시설 선택</option>
            <option value="참초관">참초관</option>
            <option value="공학관">공학관</option>
          </select>
          <select value={startTime} onChange={(e) => setStartTime(e.target.value)}>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
          </select>
          <span>~</span>
          <select value={endTime} onChange={(e) => setEndTime(e.target.value)}>
            <option value="18:00">18:00</option>
            <option value="20:00">20:00</option>
            <option value="22:00">22:00</option>
          </select>
        </div>

        <table border={1} cellPadding={10}>
          <thead>
            <tr>
              <th>건물명</th>
              <th>층수</th>
              <th>강의실명</th>
              <th>정원</th>
              <th>참여 가능 시간</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((room, idx) => (
              <tr key={idx}>
                <td>{room.building}</td>
                <td>{room.floor}</td>
                <td>{room.room}</td>
                <td>{room.capacity}</td>
                <td>{room.available}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
