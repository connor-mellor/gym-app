
import { ActionAreaCard } from '@/components/ActionAreaCard';
import styles from '@/styles/Home.module.css'
import { Container, Grid, Typography } from '@material-ui/core';
import Link from "next/link";
import { workoutSession } from '../../../../fixtures/workoutSession';

export default function Stats() {

    return (
        <div className={styles.container}>
            <Typography variant={'h5'}>Statistics Page</Typography>
            <Grid container spacing={2}>
                {workoutSession.map(({ id, sessionName, sessionDescription}: any, index: any) => (
                    <Grid key={index} item xs={12} sm={6} md={3}>
                        <Link href={`/stats/view/${id}`}>
                            <ActionAreaCard
                                id = {id}
                                sessionName = {sessionName}
                                sessionDescription = {sessionDescription}
                            />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}