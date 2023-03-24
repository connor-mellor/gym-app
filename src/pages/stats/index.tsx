import { Navigation } from "@/components/Navigation/Navigation"
import styles from '@/styles/Home.module.css'

export default function Stats() {
    const type = "Statistics"

    return (
        <main className={styles.main}>
            <Navigation />
            <h1 className={styles.title}>This is a {type} page</h1>
        </main>
    )
}