import { useState, useEffect } from 'react';
import WorkoutDetails from '../component/WorkoutDetails';
import Workoutform from '../component/Workoutform';
import { useWorkoutContext } from '../hooks/useWorkoutContext';




const Home = () => {
    const {workout, dispatch} = useWorkoutContext()
    // const [workout, setWorkout] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workout')
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'set_workout', payload:json})
                // setWorkout(json)

            }

        }
        fetchWorkouts()

    }, [dispatch])

    return(
        <div className="home">
            <div className="workout">
                {workout && workout.map((workout)=> (
                    <WorkoutDetails key={workout._id} workout={workout} />

                ))}
            </div>
            <Workoutform />
        </div>
    )
}
export default Home