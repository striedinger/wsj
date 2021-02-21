import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  border: 1px solid black;
  display: flex;
  height: 300px;
  justify-content: center;
  padding: 10px;
  text-align: center;
  word-break: break-all;
  word-wrap: break-word;
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

const DynamicInset = ({ data = {} }) => {
  const { inset_type: insetType, properties: { responsive: { layout } = {}, url } } = data;
  if (insetType !== 'dynamic') return null;
  return (
    <Container layout={layout}>
      <span>{`Dynamic Inset Placeholder - ${url}`}</span>
    </Container>
  );
};

export default DynamicInset;
