import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export function ActionAreaCard({ id, sessionName, sessionDescription }: any) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/kelly-sikkema-IZOAOjvwhaM-unsplash.jpg"
          alt="Gym Fitness - Image by Kelly Sikkema from UnSplash"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {id}. {sessionName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {sessionDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}