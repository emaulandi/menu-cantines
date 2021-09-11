import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 6),
  },
  description: {
    padding: theme.spacing(0, 1),
  },
}));

const ImageCard = ({ imgSrc, title, description }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt={title}
        image={`../../static/${imgSrc}`}
        title={title}
      />
      <CardContent>
        <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
          { description }
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
