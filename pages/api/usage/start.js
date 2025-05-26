import { PrismaClient } from "../../../generated/prisma";
import { checkRequest } from "../api-utils";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const request_result = checkRequest(req, res, {
    allowedMethods: ["PUT"],
  });

  if (!request_result) {
    console.log(`강의실 정보 수정 실패`);
    return;
  }
  const { classId, building, current_occupancy, hashtags } = req.body;

  if (!building || !classId) {
    return res.status(400).json({
      success: false,
      message: "해당하는 건물과 강의실 정보가 정확한지 확인 해 주세요.",
    });
  }

  try {
    const room = await prisma.lecture_room.findFirst({
      where: {
        building: building,
        classId: classId,
      },
    });

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "해당 강의실을 찾을 수 없습니다.",
      });
    }

    const updateData = {
      current_occupancy: room.current_occupancy + current_occupancy,
    };

    if (hashtags && typeof hashtags == "object") {
      for (const [field, count] of Object.entries(hashtags)) {
        if (count > 0) {
          updateData[field] = room[field] + count;
        }
      }
    }

    const updatedRoom = await prisma.lecture_room.update({
      where: {
        classId: classId,
      },
      data: updateData,
    });

    return res.status(200).json({
      success: true,
      message: "강의실 정보가 업데이트되었습니다.",
      roomInfo: updatedRoom,
    });
  } catch (error) {
    console.error("강의실 정보 업데이트 중 오류 : ", error);
    return res.status(500).json({
      success: false,
      message: "서버 오류가 발생했습니다.",
    });
  } finally {
    await prisma.$disconnect();
  }
}
