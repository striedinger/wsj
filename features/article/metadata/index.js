import PropTypes from 'prop-types';
import Head from 'next/head';

const Metadata = ({ article }) => {
  const { headline, subheadline } = article;
  return (
    <Head>
      <title>{`${headline} - WSJ`}</title>
      <meta name="description" content={subheadline} />
    </Head>
  );
};

Metadata.propTypes = {
  article: PropTypes.shape({
    headline: PropTypes.string,
    subheadline: PropTypes.string,
  }),
};

Metadata.defaultProps = {
  article: {
    headline: '',
    subheadline: '',
  },
};

export default Metadata;
