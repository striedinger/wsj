import PropTypes from 'prop-types';
import styled from 'styled-components';

const H2 = styled.h2`
  color: #666;
  font-family: var(--font-sans-serif);
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

Subheadline.propTypes = {
  article: PropTypes.shape({
    subheadline: PropTypes.string,
  }),
};

Subheadline.defaultProps = {
  article: {
    subheadline: '',
  },
};

export default Subheadline;
