import React, { useState } from 'react';

const HabitTracker = ({ habit }) => {
  const [streak, setStreak] = useState(habit.streak);

  const incrementStreak = () => {
    setStreak((prev) => prev + 1);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800">{habit.name}</h3>
      <p className="mt-2 text-gray-600">Frequency: {habit.frequency}</p>
      <div className="mt-4 flex items-center">
        <span className="text-gray-700">Streak: {streak} days</span>
        <button
          onClick={incrementStreak}
          className="ml-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          +1
        </button>
      </div>
    </div>
  );
};

export default HabitTracker;