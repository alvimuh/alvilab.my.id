import { PrismaClient } from "@prisma/client";
import Section from "../../../components/Section";
import Markdown from "../../../components/Markdown";

const prisma = new PrismaClient();

const ArticlePage = ({ articleWithSubArticles }) => {
  return (
    <Section>
      <h1 className="text-3xl mb-4">{articleWithSubArticles.title}</h1>
      <p className="mb-8">{articleWithSubArticles.content}</p>

      {articleWithSubArticles.subArticles.map((subArticle) => (
        <article className="mb-8">
          <h2 className="text-2xl mb-3">{subArticle.title}</h2>
          <Markdown>{subArticle.content}</Markdown>
        </article>
      ))}
    </Section>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  try {
    const articleWithSubArticles = await prisma.article.findUnique({
      where: {
        id: String(id),
      },
      include: {
        subArticles: true,
      },
    });

    if (!articleWithSubArticles) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        articleWithSubArticles: {
          ...articleWithSubArticles,
          publishedAt: articleWithSubArticles.publishedAt.toISOString(),
          subArticles: articleWithSubArticles.subArticles.map(
            (subArticles) => ({
              ...subArticles,
              publishedAt: subArticles.publishedAt.toISOString(),
            })
          ),
        },
      },
    };
  } catch (error) {
    console.error("Error fetching article:", error.message);
    return {
      props: {
        error: "Internal server error",
      },
    };
  } finally {
    await prisma.$disconnect();
  }
}

export default ArticlePage;
