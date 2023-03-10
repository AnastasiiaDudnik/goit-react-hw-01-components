import PropTypes from 'prop-types';
import { Online, Friend } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      {isOnline ? (
        <Online style={{ backgroundColor: 'green' }}></Online>
      ) : (
        <Online style={{ backgroundColor: 'red' }}></Online>
      )}

      <img src={avatar} alt={avatar} width="48" />
      <p>{name}</p>
    </Friend>
  );
};

FriendListItem.PropType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
