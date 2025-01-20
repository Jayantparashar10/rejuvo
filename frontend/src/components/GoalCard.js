import React from 'react';

const GoalCard = ({ goal }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800">{goal.title}</h3>
      <p className="mt-2 text-gray-600">{goal.description}</p>
      <div className="mt-4">
        <span
          className={`px-2 py-1 text-sm rounded-full ${
            goal.status === 'Completed'
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}
        >
          {goal.status}
        </span>
      </div>
    </div>
  );
};

export default GoalCard;