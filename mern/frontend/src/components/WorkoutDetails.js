import { useAuthContext } from '../hooks/useAuthContext';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parseISO from 'date-fns/parseISO';

const WorkoutDetails = ({ workout }) => {

  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const handleDelete = async () => {
    if (!user) {
      return
    }
    try {
      const response = await fetch(`http://localhost:4000/api/workouts/${workout._id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({type: 'DELETE_WORKOUT', payload: data})
      }
    } catch (e) {
      console.log(e, 'could not delete workout');
    }
  }

  const createdAtDate = parseISO(workout.createdAt);
  const distanceToNow = formatDistanceToNow(createdAtDate, { addSuffix: true });
  // console.log('im dyinggggg', workout.createdAt);

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>{distanceToNow}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default WorkoutDetails;