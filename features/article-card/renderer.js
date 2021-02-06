const renderer = (json, data, components) => (
  // Maybe check if components is valid component map first?
  json.map((element, index) => {
    const Component = typeof element === 'string' ? components[element] : components[element.component];
    if (Component) {
      const props = {
        data,
        // Needs better way to determine if element.props is an object
        ...(typeof element === 'object' && element.props),
      };
      // Same as above re: determine if object
      // Components with children will mostly be containers for special layouts
      const children = (typeof element === 'object' && element.children && renderer(json, data, components)) || null;
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
