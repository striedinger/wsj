import DEFAULT_COMPONENTS from './components';
import renderer from './renderer';

const defaultStructure = [
  { component: 'media', props: { floatRight: true, width: '110px' } },
  { component: 'headline', props: { level: 3 } },
  'summary',
  'bullets',
];

const mockData = {
  headline: 'The Battery Is Ready to Power the World',
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

const ArticleCard = ({ components = DEFAULT_COMPONENTS, structure = defaultStructure }) => {
  const elements = renderer(structure, components, mockData);
  return (
    <article>
      {elements}
    </article>
  );
};

export default ArticleCard;
