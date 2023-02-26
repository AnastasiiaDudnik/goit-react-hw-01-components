import { Profile } from './Profile/Profile';
import user from './json/user.json';
import { StatisticSection } from './Statistics/Statistic.section';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
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
      </div>
    </div>
  );
};
