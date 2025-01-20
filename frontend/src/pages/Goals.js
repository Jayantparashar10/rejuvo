import React, { useEffect, useState } from 'react';
import GoalCard from '../components/GoalCard';
import axios from 'axios';

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch goals from the backend
    const fetchGoals = async () => {
      try {
        const response = await axios.get('/api/goals');
        setGoals(response.data);
      } catch (error) {
        console.error('Error fetching goals:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGoals();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Goals</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : goals.length > 0 ? (
        goals.map((goal) => <GoalCard key={goal.id} goal={goal} />)
      ) : (
        <p className="text-gray-600">No goals found. Start by adding one!</p>
      )}
    </div>
  );
};

export default Goals;