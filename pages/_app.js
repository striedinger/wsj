import PropTypes from 'prop-types';
import GlobalStyle from 'styles/global';

export function reportWebVitals(metric) {
  // eslint-disable-next-line no-console
  console.info(metric);
}

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
