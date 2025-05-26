import { PrismaClient } from "../../../generated/prisma";
import { checkRequest } from "../api-utils";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const request_result = checkRequest(req, res, {
    allowedMethods: ["GET"],
  });

  if (!request_result) {
    console.log(`강의실 요청 실패`);
    return;
  }

  const { building, date, time } = req.query;

  if (!building || !date || !time) {
    return res.status(400).json({
      success: false,
      message: "건물, 날짜, 시각은 필수 항목입니다.",
    });
  }

  try {
    const timeDate = new Date(`1970-01-01T${time}`);

    const availableRooms = await prisma.lecture_room.findMany({
      where: {
        building: building, // 해당 건물만
        lecture_schedule: {
          none: {
            // 스케줄이 없는 강의실들만
            weekday: date,
            start_time: { lte: timeDate },
            end_time: { gt: timeDate },
          },
        },
      },
      select: {
        classId: true,
        room: true,
        floor: true,
        capacity: true,
      },
      orderBy: [{ floor: "asc" }, { room: "asc" }],
    });

    return res.status(200).json({
      success: true,
      building: building,
      searchTime: time,
      availableRooms: availableRooms,
      count: availableRooms.length,
    });
  } catch (error) {
    console.error("강의실 검색 중 오류 : ", error);
    return res.status(500).json({
      success: false,
      message: "서버 오류가 발생했습니다.",
    });
  } finally {
    await prisma.$disconnect();
  }
}
