import { PrismaClient } from "../../generated/prisma";
import { checkRequest } from "./api-utils";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const request_result = checkRequest(req, res, {
    allowedMethods: ["GET"],
  });

  if (!request_result) {
    console.log(`강의실 요청 실패`);
    return;
  }

  const { date, time } = req.query;

  if (!date || !time) {
    return res.status(400).json({
      success: false,
      message: "날짜, 시각은 필수 항목입니다.",
    });
  }

  try {
    // 지금 시간에 강의가 없는 강의실들 조회
    const availableRooms = await prisma.lecture_room.findMany({
      where: {
        NOT: {
          lecture_schedule: {
            some: {
              day_of_week: date,
              start_time: { lte: time },
              end_time: { gt: time },
            },
          },
        },
      },
    });

    return res.status(200).json({
      success: true,
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
