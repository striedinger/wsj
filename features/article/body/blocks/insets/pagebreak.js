import styled from 'styled-components';

const Pagebreak = styled.div`
  background-color: #dbdbdb;
  height: 1px;
  margin: 32px 90px;

  @media (min-width: 640px) {
    margin-left: 160px;
    margin-right: 160px;
  }
`;

export default Pagebreak;
