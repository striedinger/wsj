import PropTypes from 'prop-types';
import styled from 'styled-components';
import NextImage from 'next/image';

const Container = styled.div`
  margin-bottom: 8px;
  width: 100%;

  ${(props) => props.floatRight && `
    float:right;
    margin-left: 8px;
    width: 110px;
  `}

  ${(props) => props.floatLeft && `
    float: left;
    margin-right: 8px;
    width: 110px;
  `}
`;

const Media = ({ floatLeft, floatRight, data: { media } }) => (
  <Container floatRight={floatRight} floatLeft={floatLeft}>
    <NextImage src={media} width="190" height="90" layout="responsive" />
  </Container>
);

Media.propTypes = {
  data: PropTypes.shape({
    media: PropTypes.string,
  }),
  floatLeft: PropTypes.bool,
  floatRight: PropTypes.bool,
};

Media.defaultProps = {
  data: {},
  floatLeft: false,
  floatRight: false,
};

export default Media;
