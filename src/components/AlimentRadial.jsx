import React, { useEffect } from 'react';

import { Box } from '@material-ui/core';

import { initRadial } from '../radial';
import weeks_saison from '../data/weeks_saison.json';

const AlimentRadial = ({ svgId, svgSide, aliment, label }) => {
  useEffect(() => {
    const data_weeks = weeks_saison
      .filter(({ match }) => match === aliment)
      .sort((a,b) => a.week - b.week);

    initRadial(svgId, svgSide, data_weeks, label);
  });
  
  return (
    <Box>
      <svg id={svgId}> </svg>
    </Box>
  );
};

export default AlimentRadial;
