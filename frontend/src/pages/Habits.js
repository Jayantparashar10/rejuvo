import React, { useEffect, useState } from 'react';
import HabitTracker from '../components/HabitTracker';
import axios from 'axios';

const Habits = () => {
  const [habits, setHabits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch habits from the backend
    const fetchHabits = async () => {
      try {
        const response = await axios.get('/api/habits');
        setHabits(response.data);
      } catch (error) {
        console.error('Error fetching habits:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHabits();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Habits</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : habits.length > 0 ? (
        habits.map((habit) => <HabitTracker key={habit.id} habit={habit} />)
      ) : (
        <p className="text-gray-600">No habits found. Start by adding one!</p>
      )}
    </div>
  );
};

export default Habits;