import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: disc;
  margin: 0;
  padding: 0 0 0 20px;
`;

const ListItem = styled.li`
  font-family: var(--font-serif);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 8px;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Bullets = ({ data: { bullets } }) => {
  if (!bullets) return null;
  return (
    <List>
      {bullets.map((bullet, index) => {
        const { text, url } = bullet;
        return (
          <ListItem key={index}>
            <Link href={url}>{text}</Link>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Bullets;
