import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendsList.PropType = {
  friends: PropTypes.arrayOf().isRequired,
};
