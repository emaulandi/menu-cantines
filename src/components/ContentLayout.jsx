import React from 'react';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles =  makeStyles({
  contentContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const Layout = ({ maxWidthSize = 'sm', isFlex = false, ...content }) => {
  const classes = useStyles();

  return (
    <Container
      className={isFlex ? classes.contentContainer : ''}
      maxWidth={maxWidthSize}
      component="main"
      {...content}
    />
  );
};

export default Layout;
