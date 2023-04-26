import { Box, Button, TextField, Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
import styles from "./CreateSession.module.css";

export function CreateSession() {
  return (
    <Box className={styles.moduleContainer} sx={{ padding: "1rem 1.2rem" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h3">Create a Session</Typography>
      </Stack>
      <Box>
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="Session Name"
          placeholder="Name of your workout session here ..."
          margin="normal"
        />
      </Box>
      <Box>
        <TextField
          fullWidth
          id="outlined-multiline-static"
          label="Session Description"
          multiline
          placeholder="Description of your workout session here ..."
          margin="normal"
        />
      </Box>
      <Box>
        <Button variant="outlined" size="medium">
          Create
        </Button>
      </Box>
    </Box>
  );
}
