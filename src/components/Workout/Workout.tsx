import { Box, Divider, IconButton, Typography } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Stack } from "@mui/material";
import { BasicTable } from "../BasicTable";

import styles from "./Workout.module.css";

export function Workout({
  workout: { id, workoutName, sets },
  addWorkout,
}: any) {
  return (
    <Box className={styles.moduleContainer}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        useFlexGap
        spacing={1}
      >
        <Typography variant={"subtitle1"}>
          {id}. {workoutName}
        </Typography>
        <Typography variant={"body2"}>Total weight: ???kg</Typography>
        <IconButton size="small" color="inherit" aria-label="delete">
          <EditNoteIcon />
          <Typography variant="body2">Edit</Typography>
        </IconButton>
        <IconButton size="small" color="secondary" aria-label="delete">
          <DeleteIcon />
          <Typography variant="body2">Remove</Typography>
        </IconButton>
      </Stack>
      <BasicTable sets={sets} addWorkout={addWorkout} />
    </Box>
  );
}
