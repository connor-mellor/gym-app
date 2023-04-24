import { Divider, Typography } from "@mui/material"
import { Workout } from "../Workout/index"
import styles from './WorkoutSession.module.css'
import { Box, Container } from "@material-ui/core"

// type Props = {
//     id: string,
//     sessionName: string,
//     sessionDescription: string,
//     workouts: any[]
// }

export function WorkoutSession({ workoutSession: { id, sessionName, sessionDescription, workouts } }: any) {
    return (
        <Box>
            <Typography gutterBottom={true} variant={'h6'}>{id}. {sessionName}</Typography>
            <Typography gutterBottom={true} variant={'body2'}>{sessionDescription}</Typography>
            <Divider color="#f0f0f0" />
            {workouts.map((workout: any, index: number) => (
                <Workout key={index} workout={workout} />
            ))}
        </Box>
    )
}