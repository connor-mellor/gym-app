import { ActionAreaCard } from "@/components/ActionAreaCard";
import styles from "@/styles/Home.module.css";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { useState } from "react";
import { gql } from "apollo-server-micro";
import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";

const GET_SESSIONS = gql`
  query getSessions {
    id
    sessionName
    sessionDescription
  }
`;

const GetSessionsQuery = () => {
  const { loading, error, data } = useQuery(GET_SESSIONS);

  if (loading) return <div>Loading ...</div>;

  if (error) {
    console.error("Error getting query");
    return <div>Error getting query</div>;
  }

  return <Stats dataExport={data} />;
};

export default function Stats({ sessions: dataExport }: any) {
  // const { sessions: workoutSessions } = dataExport;
  const [sessions, setSessions] = useState(dataExport);

  return (
    <Box className={styles.container}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography gutterBottom={true} variant={"h5"}>
          Sessions
        </Typography>
        <Link href={`/stats/create/`}>
          <IconButton sx={{ color: "#d0fd3e" }} aria-label="add">
            <AddIcon />
          </IconButton>
        </Link>
      </Stack>
      <Divider color="#f0f0f0" />
      <Grid container spacing={2} sx={{ paddingY: 2 }}>
        {sessions.map(
          ({ id, sessionName, sessionDescription }: any, index: any) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Link href={`/stats/view/${id}`}>
                <ActionAreaCard
                  id={id}
                  sessionName={sessionName}
                  sessionDescription={sessionDescription}
                />
              </Link>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
}

export async function getServerSideProps() {
  // const url: any = "http://localhost:3000/api/statistics/sessions";
  // const res: any = await fetch(url);
  // const dataExport: any = await res.json();
  // return { props: { dataExport } };
  // const { data } = useQuery(GET_SESSIONS);
  // GetSessionsQuery();

  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        getSessions {
          id
          sessionName
          sessionDescription
        }
      }
    `,
  });

  const sessions = data.getSessions;
  return { props: { sessions } };
}
