import { Navigation } from "@/components/Navigation/Navigation"
import styles from '@/styles/Home.module.css'
import { Typography } from "@material-ui/core"

export default function Stats() {

    return (
        <main className={styles.main}>
            <Typography gutterBottom={true} variant={'h5'}>Statistics Page</Typography>
        </main>
    )
}