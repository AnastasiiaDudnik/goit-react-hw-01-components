import user from './json/user.json';
import friends from './json/friends.json';
import items from './json/transactions.json';
import { Profile } from './Profile/Profile';
import { StatisticSection } from './Statistics/Statistic.section';
import { FriendsList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

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
        <TransactionHistory items={items} />
      </div>
    </div>
  );
};
