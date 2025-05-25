import { checkRequest } from "./api-utils";
import cookie from "cookie";

export default async function handler(req, res) {
  const request_result = checkRequest(req, res, {
    allowedMethods: ["POST"],
  });
  if (!request_result) {
    console.log(`로그아웃 요청 실패`);
    return;
  }

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("userId", "", {
      httpOnly: true,
      maxAge: -1,
      path: "/",
      secure: true,
      sameSite: "strict",
    })
  );

  console.log("사용자 로그아웃 성공");
  return res.status(200).json({
    success: true,
    message: "성공적으로 로그아웃 되었습니다.",
  });
}
