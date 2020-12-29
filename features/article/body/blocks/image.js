import PropTypes from 'prop-types';
import styled from 'styled-components';
import NextImage from 'next/image';
import { useAmp } from 'next/amp';

const Figure = styled.figure`
  margin: 0;

  @media (min-width: 640px) {
  ${(props) => props.layout === 'wrap' && {
    float: 'left',
    margin: '3px 30px 23px 0',
    width: '300px',
  }}
  }
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
    } = {}, height, width,
  },
}) => {
  const isAmp = useAmp();
  return (
    <Figure layout={layout}>
      {isAmp ? (
        <amp-img
          alt={caption}
          height={height}
          layout="responsive"
          src={location}
          width={width}
        />
      ) : (
        <NextImage
          alt={caption}
          height={height}
          src={location}
          width={width}
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
