import { Fragment } from 'react';
import Link from './blocks/link';
import Paragraph from './blocks/paragraph';
import Strong from './blocks/strong';
import Italic from './blocks/italic';
import Tagline from './blocks/tagline';
import Subhed from './blocks/subhed';
import { UnorderedList, OrderedList } from './blocks/list';
import ListItem from './blocks/list-item';
import Image from './blocks/image';

const renderer = (json) => (
  json.map((element, index) => {
    const {
      content, emphasis, hed_type: hedType, ordered, text, type, uri,
    } = element;
    const contents = (content && renderer(content)) || text;
    if (type === 'paragraph') return <Paragraph key={index}>{contents}</Paragraph>;
    if (type === 'tagline') return <Tagline key={index}>{contents}</Tagline>;
    if (type === 'emphasis' && emphasis === 'BOLD') return <Strong key={index}>{contents}</Strong>;
    if (type === 'emphasis' && emphasis === 'ITALIC') return <Italic key={index}>{contents}</Italic>;
    if (type === 'hed' && hedType === 'subhed') return <Subhed key={index}>{contents}</Subhed>;
    if (type === 'link') return <Link key={index} href={uri}>{contents}</Link>;
    if (type === 'phrase') return <Link key={index} href="#foo">{contents}</Link>;
    if (type === 'list') return ordered ? <OrderedList key={index}>{contents}</OrderedList> : <UnorderedList key={index}>{contents}</UnorderedList>;
    if (type === 'listitem') return <ListItem key={index}>{contents}</ListItem>;
    if (type === 'image') return <Image key={index} data={element} />;
    if (!type && text) return <Fragment key={index}>{text}</Fragment>;
    return null;
  })
);

export default renderer;
