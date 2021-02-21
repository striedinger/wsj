import { Fragment } from 'react';
// Native
import Link from './components/link';
import Paragraph from './components/paragraph';
import Strong from './components/strong';
import Italic from './components/italic';
import Tagline from './components/tagline';
import Subhed from './components/subhed';
import { UnorderedList, OrderedList } from './components/list';
import ListItem from './components/list-item';
import Image from './components/image';
import Video from './components/video';
// Insets
import DynamicInset from './components/insets/dynamic';
import Pagebreak from './components/insets/pagebreak';

const renderer = (json) => (
  json.map((element, index) => {
    const {
      content, emphasis,
      has_drop_cap: hasDropCap,
      hed_type: hedType,
      inset_type: insetType,
      ordered, text, type, uri,
    } = element;
    const contents = (content && renderer(content)) || text;
    // Native
    if (type === 'paragraph') return <Paragraph key={index} hasDropCap={hasDropCap}>{contents}</Paragraph>;
    if (type === 'tagline') return <Tagline key={index}>{contents}</Tagline>;
    if (type === 'emphasis' && emphasis === 'BOLD') return <Strong key={index}>{contents}</Strong>;
    if (type === 'emphasis' && emphasis === 'ITALIC') return <Italic key={index}>{contents}</Italic>;
    if (type === 'hed' && hedType === 'subhed') return <Subhed key={index}>{contents}</Subhed>;
    if (type === 'link') return <Link key={index} href={uri}>{contents}</Link>;
    if (type === 'phrase') return <Link key={index} href="#foo">{contents}</Link>;
    if (type === 'list') return ordered ? <OrderedList key={index}>{contents}</OrderedList> : <UnorderedList key={index}>{contents}</UnorderedList>;
    if (type === 'listitem') return <ListItem key={index}>{contents}</ListItem>;
    if (type === 'image') return <Image key={index} data={element} />;
    if (type === 'video') return <Video key={index} data={element} />;
    // Insets
    if (type === 'inset' && insetType === 'pagebreak') return <Pagebreak key={index} $data={element} />;
    if (type === 'inset' && insetType === 'dynamic') return <DynamicInset key={index} data={element} />;
    // Plain text
    if (!type && text) return <Fragment key={index}>{text}</Fragment>;
    return null;
  })
);

export default renderer;
