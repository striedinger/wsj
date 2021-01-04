import PropTypes from 'prop-types';
import styled from 'styled-components';
import fetchArticle from 'fetchers/article';
import Layout from 'layouts/default';
import Metadata from 'features/article/metadata';
import Headline from 'features/article/headline';
import Subheadline from 'features/article/subheadline';
import Hero from 'features/article/hero';
import Byline from 'features/article/byline';
import Timestamp from 'features/article/timestamp';
import Body from 'features/article/body';

const Container = styled.div`
  display: flex;
  margin: 10px auto 0;

  @media (min-width: 980px) {
    margin: 10px;
  }
  @media (min-width: 1300px) {
    margin: 10px auto 0;
    width: 1200px;
  }
`;

const Sharetools = styled.div`
  background: #ebebeb;
  display: none;
  height: 300px;
  width: 80px;

  @media (min-width: 980px) {
    display: flex;
  }
`;

const Article = styled.article`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Main = styled.main`
  flex: 100%;
  margin: 0 10px;

  @media (min-width: 980px) {
    flex: 1;
  }
`;

const Content = styled.div`
  width: 100%;

  @media (min-width: 1300px) {
    margin: 0 auto;
    width: 720px;
  }
`;

const Header = styled.header`
  margin: 0 10px 10px;
  width: 100%;

  @media (min-width: 980px) {
    margin-right: 0;
  }
`;

const Sidebar = styled.div`
  background: #ebebeb;
  margin: 0 auto;
  height: 600px;
  width: 300px;
`;

const ArticlePage = ({ article }) => (
  <Container>
    <Metadata article={article} />
    <Sharetools />
    <Article>
      <Header>
        <Headline article={article} />
        <Subheadline article={article} />
      </Header>
      <Main>
        <Hero article={article} />
        <Content>
          <Byline article={article} />
          <Timestamp article={article} />
          <Body article={article} />
        </Content>
      </Main>
      <Sidebar />
    </Article>
  </Container>
);

ArticlePage.propTypes = {
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

export const config = { amp: 'hybrid' };

export default Layout(ArticlePage);
