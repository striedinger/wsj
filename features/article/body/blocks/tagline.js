import styled from '@emotion/styled';
import Paragraph from './paragraph';

const Tagline = styled(Paragraph)`
  font-style: italic;

  &:before {
    content: '—';
  }
`;

export default Tagline;
