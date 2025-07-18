import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ClaimHistory({ refreshTrigger }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/history').then((res) => setHistory(res.data));
  }, [refreshTrigger]);

  return (
    <div className="p-4 border rounded shadow mt-4">
      <h2 className="text-xl font-semibold mb-2">Claim History</h2>
      <div className="overflow-y-scroll max-h-60">
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="border-b p-2">User</th>
              <th className="border-b p-2">Points</th>
              <th className="border-b p-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry) => (
              <tr key={entry._id}>
                <td className="border-b p-2">{entry.user.name}</td>
                <td className="border-b p-2">{entry.pointsClaimed}</td>
                <td className="border-b p-2">{new Date(entry.claimedAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
