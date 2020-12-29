import Head from 'next/head';
import fetchArticle from 'fetchers/article';
import Headline from 'features/article/headline';
import Subheadline from 'features/article/subheadline';
import Byline from 'features/article/byline';
import Timestamp from 'features/article/timestamp';
import Body from 'features/article/body';

const Article = ({ article }) => {
  const { headline } = article;
  return (
    <div>
      <Head>
        <title>{`${headline} - WSJ`}</title>
      </Head>
      <Headline article={article} />
      <Subheadline article={article} />
      <Byline article={article} />
      <Timestamp article={article} />
      <Body article={article} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { id: seoId } = params;
  try {
    const article = await fetchArticle(seoId);
    return {
      props: {
        article,
      }
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    }
  }
}

export default Article;
