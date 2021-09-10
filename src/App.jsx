import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import ContentLayout from './components/ContentLayout';
import AlimentRadial from './components/AlimentRadial';
import AlimentsRadials from './components/AlimentsRadials';

const useStyles = makeStyles(theme => ({
  chartContainer: {
    margin: theme.spacing(2, 0),
  },
}));

function App () {
  const classes = useStyles();

  return (
    <div className="App">
      <Header />

      <ContentLayout>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>

        <AlimentRadial
          svgId="test"
          svgSide={400}
          aliment="chou"
          label="coucou"
        />

        <Typography variant="h4" color="secondary">
          Les légumes
        </Typography>
      </ContentLayout>

      <AlimentsRadials />

      <ContentLayout>
        <Typography variant="h4" color="secondary">
          Les fruits
        </Typography>
      </ContentLayout>

      <AlimentsRadials alimentCategory="fruit" />

      <ContentLayout>
        <iframe
          title="color scale"
          className={classes.chartContainer}
          width="100%"
          height="126"
          frameBorder="0"
          src="https://observablehq.com/embed/@emaulandi/menu-cantine-saisons-excerpt?cells=gridcolor"
        />

        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
        </Typography>

        <iframe
          title="legume"
          className={classes.chartContainer}
          width="100%"
          height="596"
          frameBorder="0"
          src="https://observablehq.com/embed/@emaulandi/menu-cantine-saisons-excerpt?cells=gridviewLegume"
        />

        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventor
          consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>

        <iframe
          title="fruit"
          className={classes.chartContainer}
          width="100%"
          height="616"
          frameBorder="0"
          src="https://observablehq.com/embed/@emaulandi/menu-cantine-saisons-excerpt?cells=gridviewFruit"
        />

        <Typography variant="h4" color="secondary">
          D'autres représentations plus sophistiquées ?
        </Typography>

        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>

      </ContentLayout>

    </div>
  );
}

export default App;
