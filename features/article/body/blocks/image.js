import styled from '@emotion/styled';
import NextImage from 'next/image';

const Figure = styled.figure`
  margin: 0;
`;

const Figcaption = styled.figcaption`
  color: #666;
  font-family: Retina, Arial, Helvetica, sans-serif;
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

const Image = ({ data: { caption, credit, properties: { location }, height, width } }) => (
  <Figure>
    <NextImage src={location} height={height} width={width} />
    <Figcaption>
      <Caption>{caption}</Caption>
      {credit && <Credit>{`Photo: ${credit}`}</Credit>}
    </Figcaption>
  </Figure>
);

export default Image;
