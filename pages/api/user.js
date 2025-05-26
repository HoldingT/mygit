import { PrismaClient } from "@prisma/client";
import { checkRequest } from "./api-utils";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
  }

  if (req.method === "POST") {
    const { user_id, name, password, user_type } = req.body;
    const user = await prisma.user.create({
      data: { user_id, name, password, user_type },
    });
    return res.status(201).json(user);
  }
}