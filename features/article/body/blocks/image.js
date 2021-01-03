import PropTypes from 'prop-types';
import styled from 'styled-components';
import NextImage from 'next/image';
import { useAmp } from 'next/amp';

const Figure = styled.figure`
  margin: 0;

  ${(props) => (!props.isHero && props.layout === 'wrap') && `
    @media (min-width: 640px) {
      float: left;
      margin: 3px 30px 23px 0;
      width: 300px;
    }
  `}

  ${(props) => (!props.isHero && props.layout === 'bleed') && `
    @media (min-width: 1300px) {
      margin-left: -160px;
      width: 1260px;
    }
  `}
`;

const Figcaption = styled.figcaption`
  color: #666;
  font-family: var(--font-sans-serif);
  font-weight: 300;
`;

const Caption = styled.h4`
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
  margin: 0;
`;

const Credit = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  line-height: 20px;
`;

const Image = ({
  data: {
    caption, credit,
    properties: {
      location,
      responsive: { layout },
      softcrop,
    } = {}, height, width,
  },
}) => {
  if (!location) return null;
  // eslint-disable-next-line no-nested-ternary
  const imageHeight = softcrop === 'Full Sized Square' ? (layout === 'wrap' ? 300 : width) : height;
  const imageWidth = softcrop === 'Full Sized Square' ? (layout === 'wrap' ? 300 : width) : width;
  const isAmp = useAmp();
  return (
    <Figure layout={layout}>
      {isAmp ? (
        <amp-img
          alt={caption}
          height={imageHeight}
          layout="responsive"
          src={location}
          width={imageWidth}
        />
      ) : (
        <NextImage
          alt={caption}
          height={imageHeight}
          src={location}
          width={imageWidth}
        />
      )}
      <Figcaption>
        <Caption>{caption}</Caption>
        {credit && <Credit>{`Photo: ${credit}`}</Credit>}
      </Figcaption>
    </Figure>
  );
};

Image.propTypes = {
  data: PropTypes.shape({
    caption: PropTypes.string,
    credit: PropTypes.string,
    height: PropTypes.number,
    properties: PropTypes.shape({
      location: PropTypes.string,
      responsive: PropTypes.shape({
        layout: PropTypes.string,
      }),
    }),
    width: PropTypes.number,
  }),
};

Image.defaultProps = {
  data: {},
};

export default Image;
