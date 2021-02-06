import PropTypes from 'prop-types';
import styled from 'styled-components';

const levels = {
  1: {
    'font-size': '36px',
    'font-weight': '700',
    'line-height': '36px',
  },
  2: {
    'font-size': '30px',
    'font-weight': '700',
    'line-height': '30px',
  },
  3: {
    'font-size': '20px',
    'font-weight': '700',
    'line-height': '22px',
  },
  4: {
    'font-size': '18px',
    'font-weight': '700',
    'line-height': '22px',
  },
  5: {
    'font-family': 'var(--font-serif)',
    'font-size': '14px',
    'font-weight': '400',
    'line-height': '18px',
  },
};

const Heading = styled.h3`
  font-family: var(--font-serif-display);
  margin: 0 0 8px 0;

  ${(props) => props.alignCenter && `
    text-align: center;
  `}

  ${(props) => props.level && levels[props.level]}
`;

const Link = styled.a`
  color: #222;
  text-decoration: none;
`;

const Headline = ({
  alignCenter, level, tag, data: { headline, url },
}) => (
  <Heading as={tag} level={level} alignCenter={alignCenter}>
    <Link href={url}>{headline}</Link>
  </Heading>
);

Headline.propTypes = {
  data: PropTypes.shape({
    headline: PropTypes.string,
    url: PropTypes.string,
  }),
  alignCenter: PropTypes.bool,
  level: PropTypes.number,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
};

Headline.defaultProps = {
  data: {},
  alignCenter: false,
  level: 3,
  tag: 'h3',
};

export default Headline;
