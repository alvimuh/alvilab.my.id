import prisma from "../../../utils/prisma";

export default async function handle(req, res) {
  if (req.method === "POST") {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded
      ? forwarded.split(/, /)[0]
      : req.connection.remoteAddress;

    let bookmark = await prisma.bookmarks.findUnique({
      where: {
        id: req.body.id,
      },
    });

    if (!bookmark) {
      res.status(404).json({
        status: 404,
        message: "Bookmark not found",
        data: posts,
      });
    }

    bookmark.visitor.push({
      ip: ip,
      datetime: new Date(),
    });

    bookmark = await prisma.bookmarks.update({
      where: {
        id: req.body.id,
      },
      data: {
        visitor: bookmark.visitor,
      },
    });

    res.status(200).json({
      status: 200,
      message: "Update bookmark successfully",
      data: bookmark,
    });
  } else {
    // Handle any other HTTP method
    res.status(404).json({
      status: 404,
      message: "Route not found",
    });
  }
}
