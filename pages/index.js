import styled from 'styled-components';
import Layout from 'layouts/default';
import ArticleCard from '../features/article-card';

const Container = styled.div`
  padding: 10px;
`;

const Homepage = () => (
  <Container>
    <div style={{ width: '300px' }}>
      <ArticleCard />
    </div>
  </Container>
);

export default Layout(Homepage);
