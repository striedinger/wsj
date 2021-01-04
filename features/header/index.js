import styled from 'styled-components';
import Logo from './wsj-logo.svg';

const Container = styled.nav`
  background: #fff;
  border-bottom: 1px solid #ccc;
  display: flex;
  padding: 16px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const LogoContainer = styled.a`
  align-items: center;
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
`;

const Header = () => (
  <Container>
    <LogoContainer href="/" aria-label="The Wall Street Journal">
      <Logo />
    </LogoContainer>
  </Container>
);

export default Header;
