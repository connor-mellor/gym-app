import { Grid } from "@material-ui/core";
import { BasicTable } from "../BasicTable";

export function Workout({ workout: { id, workoutName, sets } }: any) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <h3>
                    <span>
                        { id + '. ' }
                    </span>
                    { workoutName }
                </h3>
            </Grid>
            <Grid item xs={4}>
                <p>Total weight: ???kg</p>
            </Grid>
            <Grid item xs={4}>
                <button>Remove Workout</button>
            </Grid>
            <Grid item xs={12}>
                <BasicTable sets={sets} />
            </Grid>
        </Grid>
    )
}