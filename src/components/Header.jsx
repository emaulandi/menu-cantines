import React from 'react';

import { Container, Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SmileyAnimation from './SmileysAnimation';

import { emojisFood } from '../settings';

const useStyles = makeStyles(theme => ({
  coloredHeader: {
    backgroundColor: theme.palette.primary.main,
    borderBottom: "4px solid lightgrey",
    height: '500px',
    position: 'relative',
  },
  title: {
    color: 'white',
    margin: theme.spacing(0, 0, 5, 0),
    textAlign: 'center',
    position: 'absolute',
    zIndex: 1,
    bottom: '0',
    left: '50%',
    transform: 'translate(-50%, 0%)',
  },
  titleText: {
    padding: '0 15px',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  emojis: {
    height: '480px',
    position: 'absolute',
    margin:  theme.spacing(1),
    overflow: 'hidden',
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.coloredHeader}>
      <Box className={classes.emojis}>
        <Grid container spacing={8}>
          {Array(150).fill(0).map(() => {
            const one = emojisFood[Math.floor(Math.random()*emojisFood.length)];
            const two = emojisFood[Math.floor(Math.random()*emojisFood.length)];

            return (
              <Grid item>
                <SmileyAnimation
                  firstElement={one}
                  secondElement={two}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
        <Box className={classes.title}>
          <Typography variant="h1"> <span className={classes.titleText}>Menu des</span> </Typography>
          <Typography variant="h1"> <span className={classes.titleText}>cantines</span> </Typography>
          <Typography variant="h3"> Explorer l'open data avec la dataviz </Typography>
        </Box>
    </Box>
  );
};

export default Header;
