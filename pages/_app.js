import PropTypes from 'prop-types';
import GlobalStyle from 'styles/global';

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

export default App;
