import React from 'react';

import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SmileyAnimation from './SmileysAnimation';

import { emojisFood } from '../settings';

const useStyles = headerHeight => makeStyles(theme => ({
  coloredHeader: {
    backgroundColor: theme.palette.primary.main,
    height: `${headerHeight}px`,
    position: 'relative',
    marginBottom: theme.spacing(4),
  },
  titleContainer: {
    margin: theme.spacing(0, 0, 5, 0),
    textAlign: 'center',
    position: 'absolute',
    zIndex: 1,
    bottom: '0',
    left: '50%',
    transform: 'translate(-50%, 0%)',
  },
  title : {
    color: theme.palette.primary.main,
  },
  subtitle: {
    color: 'white',
  },
  titleText: {
    padding: '0 15px',
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: '5px',
  },
  emojis: {
    height: `${headerHeight}px`,
    position: 'absolute',
    overflow: 'hidden',
  }
}));

const Header = () => {
  const headerHeight = 500;
  const classes = useStyles(headerHeight)();
  const emojiOuterSize = 60;
  const emojiNum = Math.round((window.innerWidth * headerHeight) / (emojiOuterSize * emojiOuterSize));

  return (
    <Box className={classes.coloredHeader}>
      <Box className={classes.emojis}>
        <Grid container spacing={8}>
          {Array(emojiNum).fill(0).map(() => {
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
        <Box className={classes.titleContainer}>
          <Typography className={classes.title}variant="h1">
            <span className={classes.titleText}>Menu des</span>
          </Typography>
          <Typography className={classes.title} variant="h1">
            <span className={classes.titleText}>cantines</span>
          </Typography>
          <Typography className={classes.subtitle} variant="h3">
            Explorer l'open data avec la dataviz
          </Typography>
        </Box>
    </Box>
  );
};

export default Header;
