import PropTypes from 'prop-types';
import { format } from 'fecha';
import styled from 'styled-components';

const Container = styled.time`
  color: #666;
  font-family: var(--font-sans-serif);
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
`;

const Timestamp = ({ article }) => {
  const { published, updated } = article;
  if (!published && !updated) return null;
  const dateFormat = 'MMM. D, YYYY h:mm a ET';
  const displayDate = updated ? format(new Date(updated), `[Updated] ${dateFormat}`) : format(new Date(published), `[Published] ${dateFormat}`);
  return (
    <Container>
      {displayDate}
    </Container>
  );
};

Timestamp.propTypes = {
  article: PropTypes.shape({
    published: PropTypes.string,
    updated: PropTypes.string,
  }),
};

Timestamp.defaultProps = {
  article: {
    published: '',
    updated: '',
  },
};

export default Timestamp;
