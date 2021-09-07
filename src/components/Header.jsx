import React from 'react';

import { Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  coloredTitle: {
    backgroundColor: theme.palette.primary.main,
    borderBottom: "4px solid lightgrey",
    padding: theme.spacing(30, 0, 5, 0),
    margin:  theme.spacing(0, 0, 5, 0),
    textAlign: 'center',
  },
  scrollHint: {
    margin:  theme.spacing(8, 0, 0, 0),
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.coloredTitle}>
      <Container maxWidth="md">
        <Box className={classes.title} >
          <Typography variant="h1"> Hello </Typography>
          <Typography variant="h2"> How are you </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
