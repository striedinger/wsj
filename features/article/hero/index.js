import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from '../body/blocks/image';
import Video from '../body/blocks/video';

const components = {
  image: Image,
  video: Video,
};

const Container = styled.div`
  margin-bottom: 20px;
`;

const Hero = ({ article }) => {
  const { hero } = article;
  if (!hero) return null;
  const Component = components[hero.type];
  if (!Component) return null;
  return (
    <Container>
      <Component data={hero} isHero />
    </Container>
  );
};

Hero.propTypes = {
  article: PropTypes.shape({
    hero: PropTypes.shape(),
  }),
};

Hero.defaultProps = {
  article: {},
};

export default Hero;
