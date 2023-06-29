import { WorkoutSession } from "@/components/WorkoutSession/index";
import { Container } from "@mui/material";
import { useRouter } from "next/router";

export default function Stats({ dataExport }: any) {
  const router = useRouter();
  const { id } = router.query;

  let workoutSession: any;

  dataExport.workoutSessions.map((item: any) => {
    if (item.id === id) {
      workoutSession = item;
    }
  });

  return (
    <Container maxWidth={false}>
      <WorkoutSession workoutSession={workoutSession} />
    </Container>
  );
}

export async function getServerSideProps() {
  const url: any = "http://localhost:3000/api/statistics/workoutSessions";
  const res: any = await fetch(url);
  const dataExport: any = await res.json();
  return { props: { dataExport } };
}
