import { Grid } from "@material-ui/core";
import { BasicTable } from "../BasicTable";

export function Workout({ id, workoutName, sets }: any) {
    console.log(sets)
    return (
        <>
            <Grid container>
                <Grid item xs={6}>
                    <span>{ id + '.' }</span>
                    <h3>{ workoutName }</h3>
                </Grid>
                <Grid item xs={4}>
                    <p>Total weight: ???kg</p>
                </Grid>
                <Grid item xs={2}>
                    <button>Remove Workout</button>
                </Grid>
            </Grid>
            <BasicTable sets={sets} />
        </>
    )
}