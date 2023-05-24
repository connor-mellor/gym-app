import { Box, Button, TextField, Typography } from "@material-ui/core";
import { Stack, Divider } from "@mui/material";
import styles from "./CreateSession.module.css";
import { useState } from "react";

export function CreateSession() {
  const [sessionName, setSessionName] = useState("");
  const [sessionDescription, setSessionDescription] = useState("");

  const handleSubmit = () => {
    const data = {
      sessionName,
      sessionDescription,
    };

    // Send data to endpoint
    fetch("/api/stats/create/", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <Box className={styles.moduleContainer}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography gutterBottom={true} variant={"h5"}>
          Create a Session
        </Typography>
      </Stack>
      <Divider color="#f0f0f0" />
      <Box>
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="Session Name"
          placeholder="Name of your workout session here ..."
          margin="normal"
          value={sessionName}
          onChange={(e) => setSessionName(e.target.value)}
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
          value={sessionDescription}
          onChange={(e) => setSessionDescription(e.target.value)}
        />
      </Box>
      <Box>
        <Button variant="outlined" size="medium" onClick={() => handleSubmit()}>
          Create
        </Button>
      </Box>
    </Box>
  );
}
