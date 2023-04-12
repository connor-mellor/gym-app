
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import { workoutSession } from '../../../../fixtures/workoutSession';

export default function Stats() {

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Statistics page</h1>
            {workoutSession.map(({ id, sessionName}: any, index: any) => (
                <Link key={index} href={`/stats/view/${id}`}>
                    <h2>{ sessionName }</h2>
                </Link>
            ))}
        </div>
    )
}