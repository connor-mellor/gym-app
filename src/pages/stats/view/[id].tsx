import { WorkoutSession } from '@/components/WorkoutSession/index';
import { useRouter } from 'next/router';

export default function Stats({ dataExport }: any) {
    const router = useRouter();
    const { id } = router.query

    let workoutSession: any;

    dataExport.map((item: any) => {
        if(item.id === id) {
            workoutSession = item;
        }
    })

    return (
        <main>
            <WorkoutSession workoutSession={workoutSession} />
        </main>
    )
}

export async function getServerSideProps() {
    const url: any = "http://localhost:3000/api/stats/view/workoutSessions"
    const res: any = await fetch(url)
    const dataExport: any = await res.json()
    console.log(dataExport)
    return { props: { dataExport } }
}
