// import { useEffect, useState } from 'react';
// import WorkoutDetails from '../components/WorkoutDetails';
// import WorkoutForm from '../components/WorkoutForm';

// const Home = () => {

//   const [workouts, setWorkouts] = useState(null);

//   useEffect(() => {
//     const fetchWorkouts = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/api/workouts');
//         const data = await response.json();
//         console.log('---------', data)
//         if (response.ok) {
//           setWorkouts(data);
//         }
//       } catch (e) {
//         console.error(`something happened: ${e}`)
//       }
//     }
//     fetchWorkouts();
//   }, []);

//   return (
//     <div className="home">
//       <div className="workouts">
//         {workouts && workouts.map((workout) => (
//           <WorkoutDetails workout={workout} key={workout._id} />
//         ))}
//       </div>
//       <WorkoutForm/>
//     </div>
//   )
// }

// export default Home;

import { useEffect } from 'react';
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const Home = () => {

  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/workouts');
        const data = await response.json();
        console.log('---------', data)
        if (response.ok) {
          dispatch({type: 'SET_WORKOUTS', payload: data})
        }
      } catch (e) {
        console.error(`something happened: ${e}`)
      }
    }
    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm/>
    </div>
  )
}

export default Home;