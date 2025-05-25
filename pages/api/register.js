import { PrismaClient } from "../../generated/prisma";
import { checkRequest } from "./api-utils";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const request_result = checkRequest(req, res, {
    allowedMethods: ["POST"],
    requireBody: true,
  });
  if (!request_result) {
    console.log(`회원가입 요청 실패`);
    return;
  }

  const { name, userId, password, user_type } = req.body;

  if (!userId || !password || !name) {
    return res.status(400).json({
      success: false,
      message: "아이디, 패스워드, 이름은 필수 항목입니다.",
    });
  } // 유저타입은 프론트와 db에서 선택버튼을 이용하기 때문에 디폴트 존재하므로 패스

  const userType = user_type || "undergraduate";

  try {
    const checkuserID = await prisma.user.findUnique({
      where: {
        user_id: userId,
      },
    });

    if (checkuserID) {
      return res.status(409).json({
        success: false,
        message: "이미 존재하는 ID 입니다.",
      });
    } // 이름은 동명이인 가능성이 있으므로 딱히 검사 패스

    // password 암호화
    const salt = 10;
    const hashPW = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        user_id: userId,
        name: name,
        password: hashPW,
        user_type: user_type,
      },
    });

    return res.status(201).json({
      success: true,
      message: "회원가입이 완료되었습니다.",
      user: {
        userId: newUser.user_id,
        name: newUser.name,
        user_type: newUser.user_type,
      },
    });
  } catch (error) {
    console.error("회원 가입 중 오류:", error);
    return res.status(500).json({
      success: false,
      message: "서버 오류가 발생했습니다.",
    });
  } finally {
    await prisma.$disconnect(); // db 연결 메모리 누수 방지
  }
}
