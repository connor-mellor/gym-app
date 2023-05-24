import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export function ActionAreaCard({ id, sessionName, sessionDescription }: any) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="/dumbbell-gym-svgrepo-com.svg"
          alt="Dumbell icon"
        />
        <CardContent sx={{ borderTop: "1px solid #000" }}>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {id}. {sessionName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
