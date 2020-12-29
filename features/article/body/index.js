import PropTypes from 'prop-types';
import styled from 'styled-components';
import renderer from './renderer';

const Container = styled.div`
  width: 680px;
  max-width: 100%;
  margin: 0 auto 10px;
`;

const Body = ({ article }) => {
  const { body } = article;
  if (!body) return null;
  const contents = renderer(body);
  return <Container>{contents}</Container>;
};

Body.propTypes = {
  article: PropTypes.shape(),
};

Body.defaultProps = {
  article: {},
};

export default Body;
