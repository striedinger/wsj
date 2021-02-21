const renderer = (tree = [], components = {}, data = {}) => (
  tree.map((element, index) => {
    const componentKey = typeof element === 'string' ? element : element.component;
    const Component = components[componentKey];
    if (Component) {
      const props = {
        data,
        // Needs better way to determine if element.props is an object
        ...(typeof element === 'object' && element.props),
      };
      // Same as above re: determine if object
      // Components with children will mostly be containers for special layouts
      const children = (typeof element === 'object' && element.children && renderer(tree, components, data)) || null;
      return (
        <Component key={index} {...props}>
          {children}
        </Component>
      );
    }
    return null;
  })
);

export default renderer;
