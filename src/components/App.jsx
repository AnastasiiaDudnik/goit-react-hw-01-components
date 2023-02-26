import { Profile } from './Profile/Profile';
import user from './json/user.json';
import friends from './json/friends.json';
import { StatisticSection } from './Statistics/Statistic.section';
import { FriendsList } from './FriendList/FriendList';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15px',
        color: '#010101',
      }}
    >
      <div>
        <Profile user={user} />
        <StatisticSection title="Upload stats" />
        <FriendsList friends={friends} />
      </div>
    </div>
  );
};
