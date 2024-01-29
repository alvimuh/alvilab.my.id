import { status200, statusRoute404 } from "../../../utils/api";
import prisma from "../../../utils/prisma";

export default async function handle(req, res) {
  console.log(req.method);
  switch (req.method) {
    case "POST":
      handlePost(req, res);
      break;
    default:
      statusRoute404(res);
      break;
  }
}

async function handlePost(req, res) {
  const article = await prisma.Article.create({
    data: {
      title: "Membuat Money SpendingTracker App dengan Next.JS - Frontend",
      content: "This is the content of the article.",
      publishedAt: new Date(),
      subArticles: {
        create: [
          {
            title: "Introduction - Gambaran project yang akan dibuat",
            content: "Content of sub-article 1",
            part: 1,
            publishedAt: new Date(),
          },
          {
            title: "Preparation - Menyiapkan stack yang dibutuhkan",
            content: "Content of sub-article 2",
            part: 2,
            publishedAt: new Date(),
          },
        ],
      },
    },
  });

  status200(res, "Article created succcessfuly", article);
}
