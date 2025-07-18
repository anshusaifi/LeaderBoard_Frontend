import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserSelector({ selectedUser, setSelectedUser, onUserAdded }) {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState('');

  const fetchUsers = () => {
    axios.get('https://leaderboard-backend-1-rm3g.onrender.com/users').then((res) => setUsers(res.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = () => {
    if (!newUserName) return;
    axios.post('https://leaderboard-backend-1-rm3g.onrender.com/users', { name: newUserName }).then(() => {
      setNewUserName('');
      fetchUsers();
      onUserAdded(); // Notify parent to refresh leaderboard if needed
    });
  };

  return (
    <div className="p-4 border rounded shadow mb-4">
      <h2 className="text-xl font-semibold mb-2">Select User</h2>
      <select
        className="border p-2 rounded w-full"
        value={selectedUser || ''}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="">-- Select User --</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>

      <div className="mt-4 flex">
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          className="border p-2 rounded flex-1 mr-2"
          placeholder="Enter new user name"
        />
        <button
          onClick={handleAddUser}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  );
}
