import React, { useEffect } from 'react';

import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import initRadial from '../radial';
import weeksSaisonByAliment from '../data/weeks_saison_by_food.json';

const useStyles =  makeStyles({
  svgContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  textContainer: {
    maxWidth: '3.9em',
    wordBreak: 'break-all',
    position: 'absolute',
    zIndex: 1,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
});

const AlimentRadial = ({ svgId, svgSide, aliment, label, shortMonths = false }) => {
  const classes = useStyles();

  useEffect(() => {
    const dataWeeks = weeksSaisonByAliment.find(({ foodName }) => foodName === aliment).data;
    initRadial(svgId, svgSide, dataWeeks, shortMonths);
  });

  return (
    <Box className={classes.svgContainer}>
      <svg id={svgId}> </svg>
      <Typography variant="body1" className={classes.textContainer}>
        <Box fontWeight="fontWeightBold">
          {label}
        </Box>
      </Typography>
    </Box>
  );
};

export default AlimentRadial;
