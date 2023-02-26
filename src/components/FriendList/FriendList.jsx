import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendList } from './FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendList>
  );
};

FriendsList.PropType = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
