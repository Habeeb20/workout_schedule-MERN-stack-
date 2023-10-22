import React from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext'
import formatDistanceToNow  from 'date-fns/formatDistanceToNow'


const WorkoutDetails = ({workout}) => {
  const {dispatch} = useWorkoutContext()
  
  const handleClick = async () => {
    const response = await fetch('/api/workout/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if(response.ok){
      dispatch({type: 'delete_workout', payload: json})


    }
  }
  
  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Load (kg):</strong>{workout.load}</p>
        <p><strong>Reps:</strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix: true}) }</p>
        <button><span onClick={handleClick}>delete</span></button>
      
    </div>
  )
}

export default WorkoutDetails
