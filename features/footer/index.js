import styled from 'styled-components';

const Container = styled.footer`

  background: #f4f4f4;
  display: flex;
  font-family: var(--font-sans-serif);
  font-size: 12px;
  place-content: center;
  padding: 32px;
  margin-top: 32px;
  text-align: center;
`;

const Footer = () => (
  <Container>
    <span>Copyright ©2021 Dow Jones & Company, Inc. All Rights Reserved.</span>
  </Container>
);

export default Footer;
