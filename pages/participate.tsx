import Header from "../components/Header";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="div-wrapper">
        <div className="div">
          <div className="overlap">
            <div className="rectangle-6" />
            <div className="rectangle-7" />
            {/* 참여현황 타이틀 */}
            <h2 className="mypage-title">참여현황</h2>
            <div className="mypage-underline"></div>
          </div>
        </div>
      </div>
    </>
  );
}