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
import { workoutSession } from "../../../../fixtures/workoutSession";

export default function Stats() {
  return (
    <Box className={styles.container}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography gutterBottom={true} variant={"h5"}>
          Statistics Page
        </Typography>
        <Link href={`/stats/create/`}>
          <IconButton color="primary" aria-label="add">
            <AddIcon />
          </IconButton>
        </Link>
      </Stack>
      <Divider color="#f0f0f0" />
      <Grid container spacing={2} sx={{ paddingY: 2 }}>
        {workoutSession.map(
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
