# Article Card

The idea behind this article card implementation is shareability and portability. Basically, we want to provide defaults that are themable (changing, colors, font sizes, spacing, etc.) for anyone to use, while also providing the flexibility of bringing your own components with _any_ logic that they may need.

## [Renderer](renderer.js)

The renderer function is the heart of this article card, a simple recursive function that takes a tree that defines the structure of the article card, an object with the article's data, and a map of components available. It returns a rendered React tree, that can be used anywhere to create your own customized version of Article Card, with your own set of components.

## Components

  ### [Map](components/index.js)

  The component map will hold all available components, linking each import to a unique `type` that will be then passed onto the renderer function. 

  ### Structure

  The structure array will work mostly the same way it does now. As an array that resembles a DOM tree of elements, which in these case are the components that make up the article card. Each of the elements in the structure array can either be a `string` that is equivalent to the component type to use:
  ```
    const structure = ['headline', 'summary'];
  ```
  Or in cases when you need to pass props, or children, it should be an object with the keys `component`, `props`, and `children`:
  ```
    const structure = [
      { component: 'headline', props: { size: 1, align: 'center' } }, 
      { component: 'container', children: [
        'summary',
        'comments',
      ] }
    ];
  ```

  ### Logic

  Components will be self-sufficient, meaning they will receive all article data as props to apply any logic that they may need to work without requiring anything from other components. 

  ### Defaults

  The default Article Card, will aim to provide enough default components to render most variants of article cards with components that are themable. If your components will only need changes in font, font size, spacing, or colors, we recommend using defaults and creating themes.

  ### Bring your own components

  In case that the default components do not work for you, or you need extra components that do not exist elsewhere and should not be shared all you need to do is creating your own component, and add it to the component map that is passed to the renderer function. 