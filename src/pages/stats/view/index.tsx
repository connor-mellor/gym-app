
import styles from '@/styles/Home.module.css'
import Link from "next/link";

export default function Stats() {

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Statistics page</h1>
            <Link href="view/dynamic"><h2>I AM DYNAMIC</h2></Link>
        </div>
    )
}