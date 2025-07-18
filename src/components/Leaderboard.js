import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Leaderboard({ refreshTrigger }) {
  const [users, setUsers] = useState([]);

  const fetchLeaderboard = () => {
    axios.get('http://localhost:5000/leaderboard').then((res) => setUsers(res.data));
  };

  useEffect(() => {
    fetchLeaderboard();
  }, [refreshTrigger]);

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Leaderboard</h2>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="border-b p-2">Rank</th>
            <th className="border-b p-2">Name</th>
            <th className="border-b p-2">Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={user._id}>
              <td className="border-b p-2">{idx + 1}</td>
              <td className="border-b p-2">{user.name}</td>
              <td className="border-b p-2">{user.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
