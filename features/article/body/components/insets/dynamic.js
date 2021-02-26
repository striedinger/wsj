import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Mustache from 'mustache';

const Container = styled.div`
  display: flex;
  margin-bottom: 24px;
  width: 100%;

  ${(props) => props.layout === 'wrap' && `
    @media (min-width: 640px) {
      clear: both;
      float: left;
      margin: 4px 32px 24px 0;
      width: 300px;
    }
  `}
`;

const renderInset = (inset) => {
  const template = inset?.serverside?.template?.template;
  const functionName = `insetData_${Math.floor(100000000 + Math.random() * 900000000)}`;
  const context = {
    ...(inset?.serverside?.data?.data || {}),
    insetData: functionName,
  };
  let html = Mustache.render(template, context);
  if (context.includeData) {
    html = `<script>var ${functionName} = function() {return ${JSON.stringify(context)};};</script> ${html}`;
  }
  return html;
};

// Dynamic insets with client side rendering.
// Ideally fully rendered HTML should come from the server for better SEO
const DynamicInset = ({ data = {} }) => {
  const { inset_type: insetType, properties: { responsive: { layout } = {}, url } } = data;
  if (insetType !== 'dynamic') return null;
  const [inset, setInset] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setInset(renderInset(json)));
  }, [url]);

  return (
    <Container layout={layout} data-inset-url={url} dangerouslySetInnerHTML={{ __html: inset }} />
  );
};

export default DynamicInset;
