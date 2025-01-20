import React, { useEffect, useState } from 'react';
import JournalEntry from '../components/JournalEntry';
import axios from 'axios';

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch journal entries from the backend
    const fetchEntries = async () => {
      try {
        const response = await axios.get('/api/journal');
        setEntries(response.data);
      } catch (error) {
        console.error('Error fetching journal entries:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEntries();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Journal</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : entries.length > 0 ? (
        entries.map((entry) => <JournalEntry key={entry.id} entry={entry} />)
      ) : (
        <p className="text-gray-600">No journal entries found. Start by adding one!</p>
      )}
    </div>
  );
};

export default Journal;