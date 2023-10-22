import React from "react";
import { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const Workoutform = () => {
  const { dispatch } = useWorkoutContext()
  const [title, setTitle] = useState("");
  const [loads, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyField, setEmptyField] = useState([])

  const handleSubmit = async(e) => {
    e.preventDefault()

    const workout = {title, loads, reps}

    const response = await fetch('/api/workout', {
        method:'POST',
        body: JSON.stringify(workout),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()

    if(!response.ok){
        setError(json.error)
        setEmptyField(json.emptyField)

    }
    if(response.ok){
        setTitle('')
        setLoad('')
        setReps('')
        setError(null)
        setEmptyField([])
        console.log("new workout added")
        dispatch({type: 'create_workout', payload: json})
    }
  }


  return (
    <form className="create" onSubmit={handleSubmit} action="">
      <h3>Add a new Workout</h3>

      <label htmlFor="">Exercise title</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyField.includes(title) ? 'error' : ''}
      />

      <label htmlFor="">Load (in kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={loads}
        className={emptyField.includes(loads) ? 'error' : ''}
      />

      <label htmlFor="">Reps:</label>
      <input
        type="text"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyField.includes(reps) ? 'error' : ''}
      />

      <button>Add workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Workoutform;
