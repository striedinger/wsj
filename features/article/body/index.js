import { Fragment } from 'react';
import styled from '@emotion/styled';
import Link from './blocks/link';
import Paragraph from './blocks/paragraph';
import Strong from './blocks/strong';
import Italic from './blocks/italic';
import Tagline from './blocks/tagline';
import Image from './blocks/image';

const Container = styled.div`
  width: 680px;
  max-width: 100%;
  margin: 0 auto 10px;
`;

const renderElements = (json) => {
  return json.map((element, index) => {
    const { type, text, content, emphasis, uri } = element;
    const contents = content && renderElements(content);
    if (type === 'paragraph') return <Paragraph key={index}>{contents}</Paragraph>;
    if (type === 'tagline') return <Tagline key={index}>{contents}</Tagline>;
    if (type === 'emphasis' && emphasis === 'BOLD') return <Strong key={index}>{text}</Strong>;
    if (type === 'emphasis' && emphasis === 'ITALIC') return <Italic key={index}>{text}</Italic>;
    if (type === 'link') return <Link key={index} href={uri}>{text}</Link>;
    if (type === 'phrase') return <Link key={index} href="#">{text}</Link>;
    if (type === 'image') return <Image key={index} data={element} />;
    if (!type && text) return <Fragment key={index}>{text}</Fragment>;
    return null;
  });
};

const Body = ({ article }) => {
  const { body } = article;
  if (!body) return null;
  const contents = renderElements(body);
  return <Container>{contents}</Container>;
};

export default Body;
