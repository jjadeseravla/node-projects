import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutDetails = ({ workout }) => {

  const {dispatch} = useWorkoutsContext();

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/workouts/${workout._id}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({type: 'DELETE_WORKOUT', payload: data})
      }
    } catch (e) {
      console.log(e, 'could not delete workout');
    }
  }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default WorkoutDetails;