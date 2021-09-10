import React, { useEffect } from 'react';

import { Box } from '@material-ui/core';

import initRadial from '../radial';
import weeksSaison from '../data/weeks_saison.json';

const AlimentRadial = ({ svgId, svgSide, aliment, label }) => {
  useEffect(() => {
    const dataWeeks = weeksSaison
      .filter(({ match }) => match === aliment)
      .sort((a, b) => a.week - b.week);

    initRadial(svgId, svgSide, dataWeeks, label);
  });

  return (
    <Box>
      <svg id={svgId}> </svg>
    </Box>
  );
};

export default AlimentRadial;
