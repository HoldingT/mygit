import { PrismaClient } from "../../generated/prisma";
import { checkRequest } from "./api-utils";
import bcrypt from "bcrypt";
import cookie from "cookie";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const request_result = checkRequest(req, res, {
    allowedMethods: ["POST"],
    requireBody: true,
  });
  if (!request_result) {
    console.log(`로그인 요청 실패`);
    return;
  }

  const { userId, password } = req.body;

  if (!userId || !password) {
    return res.status(400).json({
      success: false,
      message: "아이디 또는 비밀번호를 입력해주세요.",
    });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        user_id: userId,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "사용자를 찾을 수 없습니다.",
      });
    }
    const checkpassword = await bcrypt.compare(password, user.password);
    if (!checkpassword) {
      return res.status(401).json({
        success: false,
        message: "비밀번호가 일치 하지 않습니다.",
      });
    }
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("userId", user.user_id, {
        httpOnly: true,
        maxAge: 60 * 15, // 15분
        path: "/",
        secure: true,
        sameSite: "strict",
      })
    );
    return res.status(200).json({
      success: true,
      message: "로그인 성공.",
      user: { userId: user.user_id, name: user.name },
    });
  } catch (error) {
    console.error("로그인 처리중 오류:", error);
    return res.status(500).json({
      success: false,
      message: "서버 오류가 발생했습니다.",
    });
  } finally {
    await prisma.$disconnect(); // db 연결 메모리 누수 방지
  }
}
