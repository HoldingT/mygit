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

  const { building, classId } = req.query;

  if (!building || !classId) {
    return res.status(400).json({
      success: false,
      message: "건물, 강의실 번호는 필수 항목입니다.",
    });
  }

  try {
    const room = await prisma.lecture_room.findFirst({
      where: {
        building: building, // 해당 건물만
        classId: classId,
      },
    });

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "해당 강의실을 찾을 수 없습니다.",
      });
    }

    return res.status(200).json({
      success: true,
      room: room,
    });
  } catch (error) {
    console.error("강의실 선택 중 오류 : ", error);
    return res.status(500).json({
      success: false,
      message: "서버 오류가 발생했습니다.",
    });
  } finally {
    await prisma.$disconnect();
  }
}
