import renderer from './renderer';
import components from './components';

const defaultStructure = [
  { component: 'media', props: { floatRight: true } },
  { component: 'headline', props: { level: 3 } },
  'summary',
  'bullets',
];

const mockData = {
  headline: 'Test Headline',
  summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec tortor sit amet quam egestas eleifend in ac erat. In commodo dui sit amet velit vestibulum lacinia.',
  media: 'http://placehold.it/160x90',
  url: 'https://www.wsj.com',
  bullets: [
    {
      text: 'bla',
      url: 'https://www.google.com',
    },
    {
      text: 'blabla',
      url: 'https://www.youtube.com',
    },
  ],
};

const ArticleCard = ({ structure = defaultStructure }) => {
  const elements = renderer(structure, mockData, components);
  return (
    <article>
      {elements}
    </article>
  );
};

export default ArticleCard;
