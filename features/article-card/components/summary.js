import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.p`
  color: #333;
  font-family: var(--font-serif);
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 8px 0;

  ${(props) => props.alignCenter && `
    text-align: center;
  `}
`;

const Summary = ({ alignCenter, data: { summary } }) => (
  <Container alignCenter={alignCenter}>
    {summary}
  </Container>
);

Summary.propTypes = {
  alignCenter: PropTypes.bool,
  data: PropTypes.shape({
    summary: PropTypes.string,
  }),
};

Summary.defaultProps = {
  alignCenter: false,
  data: {},
};

export default Summary;
