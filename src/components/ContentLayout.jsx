import React from 'react';

import { Container } from '@material-ui/core';

const Layout = ({...content}) => {
  
    return (
      <>
        <Container maxWidth="sm"
          component="main"
          {...content}
        />
      </>
    );
};

export default Layout;
