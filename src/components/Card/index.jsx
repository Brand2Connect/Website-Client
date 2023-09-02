import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MediaCard({title,subtitle}) {
  return (
    <Card sx={{ fontSize:13}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style = {{fontWeight:600,marginBottom:"0.7vh",fontSize:16}}>
        {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" style = {{fontWeight:300,color:"gray",fontSize:14,lineHeight:"1.1rem"}}>
         {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
}
