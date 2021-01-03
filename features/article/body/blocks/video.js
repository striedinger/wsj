import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useAmp } from 'next/amp';

const { NEXT_PUBLIC_VIDEO_API } = process.env;

const getAmpIframeUrl = (guid) => (
  `https://video-api.wsj.com/api-video/player/v3/iframe.html?guid=${guid}&height=225&width=400`
);

const Figure = styled.figure`
  margin: 20px 0;

  ${(props) => !props.isHero && `
    @media (min-width: 1300px) {
      margin-left: -40px;
      width: 805px;
    }
  `}
`;

const Figcaption = styled.figcaption`
  color: #666;
  font-family: var(--font-sans-serif);
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
`;

const Placeholder = styled.div`
  padding-bottom: 56.25%;
  background: #ebebeb;
`;

const Strap = styled.div`
  border-top: 1px solid #dadada;
  margin-bottom: 12px;
`;

const Title = styled.h4`
  font-family: var(--font-sans-serif);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
  padding: 8px 0 0 0;
`;

const Video = ({ data: { caption, name: guid, title }, isHero }) => {
  if (!guid) return null;
  const isAmp = useAmp();
  const [state, setState] = useState({});

  useEffect(() => {
    fetch(`${NEXT_PUBLIC_VIDEO_API}/api-video/find_all_videos.asp?type=guid&count=1&fields=all&query=${guid}`)
      .then((response) => response.json())
      .then((json) => {
        const { items } = json;
        if (items?.[0]) {
          const { videoStillURL: thumbnail, video2564kMP4Url: video } = items[0];
          setState({ thumbnail, video });
        }
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error(error));
  }, [guid]);

  const withWrapper = (Component) => (
    <Figure isHero={isHero}>
      {!isHero && (
        <Strap>
          {!title && <Title>{title}</Title>}
        </Strap>
      )}
      {Component}
      <Figcaption>{caption}</Figcaption>
    </Figure>
  );

  if (isAmp) {
    return withWrapper(
      <amp-iframe
        height="225"
        width="400"
        layout="responsive"
        src={getAmpIframeUrl(guid)}
        sandbox="allow-scripts allow-same-origin"
      >
        <amp-img layout="fill" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" placeholder />
      </amp-iframe>,
    );
  }
  if (state.video) {
    return withWrapper(
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <video
        controls
        poster={state.thumbnail}
        src={state.video}
        width="100%"
      />,
    );
  }
  return withWrapper(<Placeholder />);
};

Video.propTypes = {
  data: PropTypes.shape({
    caption: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
  }),
};

Video.defaultProps = {
  data: {},
};

export default Video;
