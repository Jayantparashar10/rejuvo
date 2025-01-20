import React from 'react';

const JournalEntry = ({ entry }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <p className="text-gray-700">{entry.content}</p>
      <p className="mt-2 text-sm text-gray-500">
        {new Date(entry.date).toLocaleDateString()}
      </p>
    </div>
  );
};

export default JournalEntry;