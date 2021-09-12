import React from 'react';

import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { max } from 'd3-array';
import { scaleLinear } from 'd3-scale';

import AlimentRadial from './AlimentRadial';

import weeksSaisonByAliment from '../data/weeks_saison_by_food.json';

const useStyles = makeStyles(theme => ({
  svgContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  wholeChartContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(6),
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const AlimentsRadials = ({ alimentCategory = 'legume' }) => {
  const classes = useStyles();
  const top10alimentsData = weeksSaisonByAliment
    .filter(({ data }) => data[0].category === alimentCategory)
    .filter((_, i) => i < 10);

  const maxPerWeek = max(
    top10alimentsData.map(({ data }) => max(data.map(({ count }) => Math.abs(count)))),
  );

  const svgSizeScale = scaleLinear()
    .domain([0, maxPerWeek])
    .range([150, 280]);

  return (
    <Container maxWidth="lg" className={classes.wholeChartContainer}>
      <Grid container justifyContent="center" spacing={4} className={classes.svgContainer}>
        {top10alimentsData.map(aliment => {
          const maxCount = max(aliment.data.map(({ count }) => Math.abs(count)));
          const alimentName = aliment.foodName;

          return (
            <Grid item className={classes.gridItem}>
              <AlimentRadial
                svgId={`chart-radial-${alimentName.split(' ')[0]}-${alimentName.split(' ')[1]}`}
                svgSide={svgSizeScale(maxCount)}
                aliment={alimentName}
                label={alimentName}
                shortMonths
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default AlimentsRadials;
