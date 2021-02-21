import styled from 'styled-components';
import Paragraph from './paragraph';

const Tagline = styled(Paragraph)`
  font-style: italic;

  &:before {
    content: '—';
  }
`;

export default Tagline;
