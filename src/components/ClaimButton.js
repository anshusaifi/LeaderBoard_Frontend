import axios from 'axios';

export default function ClaimButton({ selectedUser, onClaimed }) {
  const handleClaim = () => {
    if (!selectedUser) {
      alert('Please select a user first');
      return;
    }
    axios.post(`https://leaderboard-backend-1-rm3g.onrender.com/users/${selectedUser}/claim`).then((res) => {
      onClaimed(); // Notify parent to refresh leaderboard
      alert(`User received ${res.data.points} points!`);
    });
  };

  return (
    <div className="p-4 border rounded shadow mb-4">
      <button
        onClick={handleClaim}
        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 w-full"
      >
        Claim Points
      </button>
    </div>
  );
}
