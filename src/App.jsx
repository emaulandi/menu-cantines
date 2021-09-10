import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header.jsx';
import ContentLayout from './components/ContentLayout.jsx';
import AlimentRadial from './components/AlimentRadial.jsx';

const useStyles = makeStyles(theme => ({
  chartContainer: {
    margin: theme.spacing(2, 0),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header />
      <ContentLayout>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>

        <AlimentRadial
          svgId={"test"}
          svgSide={300}
          aliment={"chou"}
          label={"coucou"}
        />

        <iframe
          className={classes.chartContainer}
          width="100%"
          height="126"
          frameborder="0"
          src="https://observablehq.com/embed/@emaulandi/menu-cantine-saisons-excerpt?cells=gridcolor"
        />

        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
        </Typography>

        <iframe
          className={classes.chartContainer}
          width="100%"
          height="596"
          frameborder="0"
          src="https://observablehq.com/embed/@emaulandi/menu-cantine-saisons-excerpt?cells=gridviewLegume"
        />

        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>

        <iframe
          className={classes.chartContainer}
          width="100%"
          height="616"
          frameborder="0"
          src="https://observablehq.com/embed/@emaulandi/menu-cantine-saisons-excerpt?cells=gridviewFruit"
        />

        <Typography variant="h4" color="secondary">
          D'autres représentations plus sophistiquées ?
        </Typography>

        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>

        <iframe
          className={classes.chartContainer}
          width="100%"
          height="384"
          frameborder="0"
          src="https://observablehq.com/embed/@emaulandi/menu-cantine-saisons-excerpt?cells=radialExample"
        />

      </ContentLayout>
      
    </div>
  )
}

export default App
