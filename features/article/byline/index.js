import { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
`;

const Author = styled.a`
  color: #0080c3;
`;

const Byline = ({ article }) => {
  const { byline } = article;
  if (!byline || byline.length === 0) return null;
  const content = byline.map((element, index) => {
    if (element.type === 'phrase' && element.phrase_type === 'author') {
      return (
        <Author
          key={index}
          href={`https://www.wsj.com/news/author/${element.id}`}
          target="_blank"
          rel="noopener noreferrer"
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

Byline.propTypes = {
  article: PropTypes.shape({
    byline: PropTypes.arrayOf(PropTypes.shape()),
  }),
};

Byline.defaultProps = {
  article: {
    byline: [],
  },
};

export default Byline;
