import Header from 'features/header';
import Footer from 'features/footer';

const DefaultLayout = (Page) => (props) => (
  <>
    <Header />
    <Page {...props} />
    <Footer />
  </>
);

export default DefaultLayout;
