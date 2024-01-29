import {
  status200,
  status404,
  status500,
  statusRoute404,
} from "../../../utils/api";
import prisma from "../../../utils/prisma";

export default async function handle(req, res) {
  console.log(req.method);
  switch (req.method) {
    case "GET":
      handleGet(req, res);
      break;
    default:
      statusRoute404(res);
      break;
  }
}

async function handleGet(req, res) {
  try {
    const articleWithSubArticles = await prisma.article.findUnique({
      where: {
        id: String(req.query.id),
      },
      include: {
        subArticles: true,
      },
    });
    if (!articleWithSubArticles) {
      return status404(res, "Article with sub article");
    }
    status200(res, "article with sub article", articleWithSubArticles);
  } catch (error) {
    status500(res, "article with sub article", error);
  }
}
