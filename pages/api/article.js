import { PrismaClient } from "@prisma/client";
import prisma from "../../utils/prisma";

export default async function handle(req, res) {
  const posts = await prisma.bookmarks.findMany();
  res.json(posts);
}
