import { Fragment } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  font-family: Exchange, Georgia, serif;
  font-style: italic;
  font-weight: 400;
`;

const Author = styled.a`
  color: #0080c3;
`;

const Byline = ({ article }) => {
  const { byline } = article;
  if (!byline) return null;
  const content = byline.map((element, index) => {
    if (element.type === 'phrase' && element.phrase_type === 'author') {
      return (
        <Author
          key={index}
          href={`https://www.wsj.com/news/author/${element.id}`}
          target="_blank" rel="noopener noreferrer"
        >
          {element.text}
        </Author>
      );
    }
    return <Fragment key={index}>{element.text}</Fragment>;
  });
  return (
    <Container>
      {content}
    </Container>
  );
};

export default Byline;
