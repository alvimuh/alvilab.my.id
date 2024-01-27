import prisma from "../../../utils/prisma";

export default async function handle(req, res) {
  const posts = await prisma.bookmarks.findMany();
  posts.forEach((element) => {
    element.total_visitor = element.visitor.length;
    element.visitor = undefined;
  });
  res.status(200).json({
    status: 200,
    message: "Get bookmarks successfully",
    data: posts,
  });
}
