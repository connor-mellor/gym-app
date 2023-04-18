import { Workout } from "../Workout/index"

// type Props = {
//     id: string,
//     sessionName: string,
//     sessionDescription: string,
//     workouts: any[]
// }

export function WorkoutSession({ workoutSession: { id, sessionName, sessionDescription, workouts } }: any) {
    return (
        <>
            <h3>{ id + '. ' + sessionName }</h3>
            <p>{ sessionDescription }</p>

            {workouts.map((workout: any, index: number) => (
                <Workout key={index} workout={workout} />
            ))}
        </>
    )
}