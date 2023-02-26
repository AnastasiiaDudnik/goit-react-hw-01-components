import PropTypes from 'prop-types';
import { List, Item } from './StatisticList.styled';

export const StatisticList = ({ stats }) => {
  return (
    <List>
      {stats.map(({ id, label, percentage }) => (
        <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
          <span>{label}</span>
          <span>{percentage}%</span>
        </Item>
      ))}
    </List>
  );
};

StatisticList.PropType = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
