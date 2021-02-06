import PropTypes from 'prop-types';
import styled from 'styled-components';
import NextImage from 'next/image';

const Container = styled.div`
  margin-bottom: 8px;
  width: ${(props) => props.containerWidth};

  ${(props) => props.floatRight && `
    float:right;
    margin-left: 8px;
  `}

  ${(props) => props.floatLeft && `
    float: left;
    margin-right: 8px;
  `}
`;

const Media = ({
  floatLeft, floatRight, width, data: { media },
}) => (
  <Container floatRight={floatRight} floatLeft={floatLeft} containerWidth={width}>
    <NextImage src={media} width="190" height="90" layout="responsive" />
  </Container>
);

Media.propTypes = {
  data: PropTypes.shape({
    media: PropTypes.string,
  }),
  floatLeft: PropTypes.bool,
  floatRight: PropTypes.bool,
  width: PropTypes.string,
};

Media.defaultProps = {
  data: {},
  floatLeft: false,
  floatRight: false,
  width: '100%',
};

export default Media;
