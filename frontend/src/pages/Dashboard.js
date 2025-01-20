import React from 'react';
import AISuggestionForm from '../components/AISuggestionForm';
import GoalCard from '../components/GoalCard';
import HabitTracker from '../components/HabitTracker';

const Dashboard = () => {
  // Example data (replace with real data from the backend)
  const goals = [
    {
      id: 1,
      title: 'Reduce Carbon Footprint',
      description: 'Track and reduce my carbon emissions by 20% this year.',
      status: 'In Progress',
    },
  ];

  const habits = [
    {
      id: 1,
      name: 'Daily Meditation',
      frequency: 'Daily',
      streak: 5,
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Rejuvo</h1>
      <p className="mb-6 text-gray-600">
        Your personal productivity tool for new beginnings.
      </p>

      {/* AI Suggestion Form */}
      <div className="mb-8">
        <AISuggestionForm />
      </div>

      {/* Goals Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Goals</h2>
        {goals.length > 0 ? (
          goals.map((goal) => <GoalCard key={goal.id} goal={goal} />)
        ) : (
          <p className="text-gray-600">No goals found. Start by adding one!</p>
        )}
      </div>

      {/* Habits Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Habits</h2>
        {habits.length > 0 ? (
          habits.map((habit) => <HabitTracker key={habit.id} habit={habit} />)
        ) : (
          <p className="text-gray-600">No habits found. Start by adding one!</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;