import { useState } from 'react';
import UserSelector from './components/UserSelector';
import ClaimButton from './components/ClaimButton';
import Leaderboard from './components/Leaderboard';
import ClaimHistory from './components/ClaimHistory';

export default function App() {
  const [selectedUser, setSelectedUser] = useState('');
  const [refreshFlag, setRefreshFlag] = useState(false);

  const triggerRefresh = () => setRefreshFlag(!refreshFlag);

  return (
    <div className="max-w-2xl mx-auto mt-8 space-y-4">
      <UserSelector selectedUser={selectedUser} setSelectedUser={setSelectedUser} onUserAdded={triggerRefresh} />
      <ClaimButton selectedUser={selectedUser} onClaimed={triggerRefresh} />
      <Leaderboard refreshTrigger={refreshFlag} />
      <ClaimHistory refreshTrigger={refreshFlag} />
    </div>
  );
}
