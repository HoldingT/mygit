import { PrismaClient } from "../../generated/prisma"; // or "prisma/client" if you're using default generation

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const users = await prisma.user.findMany(); // `user` 테이블이 존재해야 합니다.
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error("DB 연결 오류:", error);
    res.status(500).json({ success: false, message: "DB 연결 실패" });
  } finally {
    await prisma.$disconnect();
  }
}