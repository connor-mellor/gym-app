import { Navigation } from "@/components";
import { Table } from "@/components/Table";
import { useRouter } from "next/router"
import { sets } from "../../../../fixtures";

export default function Stats() {

    const router = useRouter();

    return (
        <main>
            <h1>Dyncamic page: {router.query.id}</h1>
            <p>This page will be used for viewing individual sessions e.g. by day etc...</p>
            <Table sets={sets}/>
        </main>
    )
}

//TODO:
    // Component structure:
        // <Session />
        // <Workout >
            // <Table />
        // </Workout> 