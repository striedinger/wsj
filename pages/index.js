import styled from 'styled-components';
import Layout from 'layouts/default';
import ArticleCard from '../features/article-card';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: ${(props) => props.size || '1'};

  ${(props) => props.direction && `
    flex-direction: ${props.direction};
  `}
`;

const layout1 = [
  { component: 'headline', props: { level: 1 } },
  'summary',
  'bullets',
];

const layout2 = [
  { component: 'headline', props: { level: 3 } },
  'summary',
];

const layout3 = [
  'media',
  { component: 'headline', props: { level: 1, alignCenter: true, fontWeight: '400' } },
  { component: 'summary', props: { alignCenter: true } },
];

const layout4 = [
  'media',
  'headline',
  'summary',
  'bullets',
];

const layout5 = [
  { component: 'media', props: { floatLeft: true, width: '110px' } },
  'headline',
  'summary',
];

const Homepage = () => (
  <div style={{ padding: '10px' }}>
    <Container style={{ margin: '80px 350px 20px 80px' }}>
      <Container size="1" style={{ marginRight: '16px', paddingRight: '16px', borderRight: '1px solid gray' }}>
        <ArticleCard structure={layout1} />
        <ArticleCard structure={layout2} />
        <ArticleCard structure={layout2} />
        <ArticleCard structure={layout2} />
        <ArticleCard structure={layout2} />
        <ArticleCard structure={layout2} />
      </Container>
      <Container size="2">
        <ArticleCard structure={layout3} />
        <Container style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid gray' }}>
          <Container size="1" style={{ marginRight: '8px' }}>
            <ArticleCard structure={layout4} />
          </Container>
          <Container size="1">
            <ArticleCard structure={layout4} />
          </Container>
        </Container>
        <ArticleCard structure={layout5} />
        <ArticleCard structure={layout5} />
      </Container>
    </Container>
  </div>
);

export default Layout(Homepage);
