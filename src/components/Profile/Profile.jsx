import PropTypes from 'prop-types';
import {
  Description,
  Avatar,
  Tag,
  Location,
  Stats,
  StatsItem,
} from './Profile.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div>
      <Description>
        <Avatar src={avatar} alt={avatar} />
        <p>{username}</p>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <span>Followers </span>
          <span>{followers}</span>
        </StatsItem>
        <StatsItem>
          <span>Views </span>
          <span>{views}</span>
        </StatsItem>
        <StatsItem>
          <span>Likes </span>
          <span>{likes}</span>
        </StatsItem>
      </Stats>
    </div>
  );
};

Profile.PropType = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,

    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
