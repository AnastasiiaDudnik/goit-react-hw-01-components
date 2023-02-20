import { Profile } from './Profile/Profile';
import user from './json/user.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        color: '#010101',
      }}
    >
      <div>
        <Profile user={user} />
      </div>
    </div>
  );
};
