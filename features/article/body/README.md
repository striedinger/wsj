# Article Body 

## Renderer

The renderer function is what brings all the pieces together and returns a nicely rendered article body, it is for all intents and purposes a `React` version of `capi-converter`.
Taking advantage of the fact that the `capi` article body is just an array of elements that may or may not have children each, and knowing that if the element has children they will be under the `content` array property, this recursive function loops through the available blocks:
```
const renderer = (json) => (
  json.map((element, index) => {
    ...
  })
);
```
Declares a `contents` variable, that will be assigned `renderer(content)` if `content` is available or default to the `text` property:
```
const contents = (content && renderer(content)) || text;
```
 Next, it will check if the `type` property has an available component and if so will return that component with our previously defined `contents` as its children props and any additional data from the element `capi` it may require, in some cases it may be more convenient to just pass the whole `element` object as props:
 ```
 const { has_drop_cap: hasDropCap, type } = element;
 if (type === 'paragraph') return <Paragraph key={index} hasDropCap={hasDropCap}>{contents}</Paragraph>;
 if (type === 'image') return <Image key={index} data={element} />;
 ...
 ```

If the current element has no type, but has a text property we will render plain text. If there are no type or text properties, we just render `null`:
```
if (!type && text) return <Fragment key={index}>{text}</Fragment>;
return null;
```


## Blocks

## What about ads, newsletters, etc.?

We want to keep this component simple and pure, to focus mostly on article body related development, but we understand that we are also required to add monetization and marketing features that most times are out of our control and sometimes even knowledge.
Luckily, the renderer function returns an array of `React` components, which means that once your body elements have been rendered with the function, you can freely transform it as you wish to add any extra features you might need. For example:
```
  export default MyArticleBody = bodyJson => {
    const body = renderer(bodyJson);
    // Add an <Ad /> component on the 10th position
    body.splice(10, 0, <Ad />);
    return <div>{body}</div>;
  };
```

## Possible optimizations

- One very simple, but powerful optimization is to dynamically import components in the renderer function. This way, our client bundle will not include _every_ existing component, and will only load the required ones as needed.
- If an article body is made of too many elements, it is possibly better to use a `for` loop to generate the resulting array instead of `map` as the former is significantly faster than the latter.
