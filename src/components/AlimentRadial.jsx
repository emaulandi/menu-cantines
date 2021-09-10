import React, { useEffect } from 'react';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import initRadial from '../radial';
import weeksSaisonByAliment from '../data/weeks_saison_by_food.json';

const useStyles =  makeStyles({
  svgContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const AlimentRadial = ({ svgId, svgSide, aliment, label }) => {
  const classes = useStyles();

  useEffect(() => {
    const dataWeeks = weeksSaisonByAliment.find(({ foodName }) => foodName === aliment).data;
    initRadial(svgId, svgSide, dataWeeks, label);
  });

  return (
    <Box className={classes.svgContainer}>
      <svg id={svgId}> </svg>
    </Box>
  );
};

export default AlimentRadial;
