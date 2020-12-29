import styled from '@emotion/styled';

const H2 = styled.h2`
  color: #666;
  font-family: Retina, Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 300;
  margin: 0 0 16px 0;
  padding: 0;
`;

const Subheadline = ({ article }) => {
  const { subheadline } = article;
  if (!subheadline) return null;
  return <H2>{subheadline}</H2>;
};

export default Subheadline;
