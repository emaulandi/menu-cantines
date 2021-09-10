import React from 'react';

import { Container } from '@material-ui/core';

const Layout = ({ ...content }) => (
  <>
    <Container
      maxWidth="sm"
      component="main"
      {...content}
    />s
  </>
);

export default Layout;
