import styled from '@emotion/styled';

const H1 = styled.h1`
  color: #333;
  font-family: Escrow Condensed, Georgia, serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 1em;
  margin: 0 0 8px 0;
`;

const Headline = ({ article }) => {
  const { headline } = article;
  if (!headline) return null;
  return <H1>{headline}</H1>;
};

export default Headline;
