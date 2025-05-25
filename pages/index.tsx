import Header from "../components/Header";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      
      <div className="div-wrapper">
        <div className="div">
          <div className="overlap">
            <div className="rectangle" />
            <div className="text-wrapper">서비스 안내</div>
            <div className="text-wrapper-2">이미지2</div>
            <div className="rectangle-2" />
            <div className="rectangle-6" />
            <div className="rectangle-7" />
            <p className="p">
              이 웹서비스는 연세대학교 미래캠퍼스 학생 및 교직원들이<br />
              강의실 예약 및 공간 이용 현황을 쉽게 확인하고 평가할 수 있도록<br />
              설계된 플랫폼입니다.
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}
