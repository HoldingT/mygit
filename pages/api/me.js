import cookie from "cookie";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const cookies = cookie.parse(req.headers.cookie || "");
  const userId = cookies.userId;

  if (!userId) {
    return res.status(401).json({ success: false, user: null });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { user_id: userId },
      select: { user_id: true, name: true, user_type: true },
    });

    if (!user) {
      return res.status(404).json({ success: false, user: null });
    }

    return res.status(200).json({ success: true, user });
  } catch (err) {
    return res.status(500).json({ success: false, error: "서버 오류" });
  } finally {
    await prisma.$disconnect();
  }
}