import styled from 'styled-components';

const Paragraph = styled.p`
  font-family: var(--font-serif);
  font-size: 17px;
  font-weight: 400;
  line-height: 27px;
  margin-bottom: 17px;

  ${(props) => props.hasDropCap && `
    &:first-letter {
      float: left;
      font-family: var(--font-serif-display);
      font-size: 5.2em;
      font-weight: 700;
      line-height: .92em;
      margin-right: .1em;
      text-transform: uppercase;
    }
  `}
`;

export default Paragraph;
