import PropTypes from 'prop-types';
import fetchArticle from 'fetchers/article';
import Metadata from 'features/article/metadata';
import Headline from 'features/article/headline';
import Subheadline from 'features/article/subheadline';
import Byline from 'features/article/byline';
import Timestamp from 'features/article/timestamp';
import Body from 'features/article/body';

const Article = ({ article }) => (
  <div>
    <Metadata article={article} />
    <Headline article={article} />
    <Subheadline article={article} />
    <Byline article={article} />
    <Timestamp article={article} />
    <Body article={article} />
  </div>
);

Article.propTypes = {
  article: PropTypes.shape().isRequired,
};

export async function getServerSideProps({ params }) {
  const { id: seoId } = params;
  try {
    const article = await fetchArticle(seoId);
    return {
      props: {
        article,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export const config = { amp: true };

export default Article;
