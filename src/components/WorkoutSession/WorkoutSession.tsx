import { Divider, Typography } from "@mui/material";
import { Workout } from "../Workout/index";
import styles from "./WorkoutSession.module.css";
import AddIcon from "@mui/icons-material/Add";
import { Box, IconButton } from "@material-ui/core";
import { useState } from "react";

export function WorkoutSession({
  workoutSession: {
    id,
    sessionName,
    sessionDescription,
    workouts: workoutInfo,
  },
}: any) {
  const [workouts, setWorkouts] = useState(workoutInfo);

  const addWorkout = () => {
    const newWorkout = {
      id: workouts.length + 1,
      workoutName: "New workout",
      sets: [
        {
          set: 0,
          kg: 0,
          rep: 0,
          complete: false,
        },
        {
          set: 0,
          kg: 0,
          rep: 0,
          complete: false,
        },
        {
          set: 0,
          kg: 0,
          rep: 0,
          complete: false,
        },
      ],
    };

    setWorkouts([...workouts, newWorkout]);
  };
  return (
    <Box>
      <Typography gutterBottom={true} variant={"h6"}>
        {id}. {sessionName}
      </Typography>
      <Typography gutterBottom={true} variant={"body2"}>
        {sessionDescription}
      </Typography>
      <IconButton color="primary" aria-label="add" onClick={() => addWorkout()}>
        <AddIcon />
      </IconButton>
      <Divider color="#f0f0f0" />
      {workouts.map((workout: any, index: any) => (
        <Workout key={index} workout={workout} />
      ))}
    </Box>
  );
}
