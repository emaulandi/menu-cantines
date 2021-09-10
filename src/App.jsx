import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import ContentLayout from './components/ContentLayout';
import AlimentRadial from './components/AlimentRadial';
import AlimentsRadials from './components/AlimentsRadials';
import Footer from './components/Footer';

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  chartContainer: {
    margin: theme.spacing(2, 0),
  },
  strong: {
    color: 'black',
    background: theme.palette.primary.light,
    padding: '2px 5px',
    borderRadius: '2px',
  },
  niceLink: {
    color: 'black',
    background: theme.palette.primary.main,
    padding: '2px 5px',
    borderRadius: '2px',

    '&:hover': {
      background: 'grey',
      color: 'white',
      textDecoration: 'none',
    },
  },
  separator: {
    color: theme.palette.primary.light,
    margin: theme.spacing(2, 0),
    opacity: 0.3,
  },
}));

function App () {
  const classes = useStyles();

  return (
    <div className="App">
      <Header />

      <ContentLayout>
        <Typography variant="body1" gutterBottom>
          Qu'est-ce que l'on peut apprendre sur le menu des cantines grâce à l'open data
          et à la dataviz ? C'est la question que l'on s'est posé (Florian Melki et Edith Maulandi).
        </Typography>
        <Typography variant="body1" gutterBottom>
          <span className={classes.strong}>Le but de ce projet :</span> réaliser
          une étude open bar sur des données ouvertes sans a priori
          (et sans obligation de résultat). Nous allons voir avec vous comment cet exemple peut nous
          éclairer sur l'utilisation des jeux de données en open data et de l'usage de la dataviz
          pour les comprendre et les valoriser.
        </Typography>

        <Typography variant="h4" className={classes.title} color="primary">
          Comment choisir un jeu de données et le manipuler ?
        </Typography>

        <Typography variant="body1" gutterBottom>
          Qu'est-ce que l'on peut apprendre sur le menu des cantines grâce à l'open data
          et à la dataviz ? C'est la question que l'on s'est posé (Florian Melki et Edith Maulandi).
        </Typography>

        <Typography variant="h4" className={classes.title} color="primary">
          Comment explorer les données et trouver des pistes d'analyses ?
        </Typography>

        <Typography variant="body1" gutterBottom>
          Qu'est-ce que l'on peut apprendre sur le menu des cantines grâce à l'open data
          et à la dataviz ? C'est la question que l'on s'est posé (Florian Melki et Edith Maulandi).
        </Typography>

        <Typography variant="h4" className={classes.title} color="primary">
          Nos trouvailles
        </Typography>

        <Typography variant="body1" gutterBottom>
          Qu'est-ce que l'on peut apprendre sur le menu des cantines grâce à l'open data
          et à la dataviz ? C'est la question que l'on s'est posé (Florian Melki et Edith Maulandi).
        </Typography>

        <Typography variant="h5" className={classes.title} color="secondary">
          Consommation de viandes et poissons
        </Typography>

        <Typography variant="body1" gutterBottom>
          Qu'est-ce que l'on peut apprendre sur le menu des cantines grâce à l'open data
          et à la dataviz ? C'est la question que l'on s'est posé (Florian Melki et Edith Maulandi).
        </Typography>

        <Typography variant="h5" className={classes.title} color="secondary">
          Saisons
        </Typography>

        <Typography variant="body1" gutterBottom>
          Qu'est-ce que l'on peut apprendre sur le menu des cantines grâce à l'open data
          et à la dataviz ? C'est la question que l'on s'est posé (Florian Melki et Edith Maulandi).
        </Typography>

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

        <Typography className={classes.title} variant="h6" color="secondary">
          D'autres représentations plus sophistiquées ?
        </Typography>

        <AlimentRadial
          svgId="test"
          svgSide={370}
          aliment="chou"
          label="chou"
        />

        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>

        <hr className={classes.separator} />
        <Typography variant="body1">
          Les <span className={classes.strong}> 10 légumes</span> les plus consommés
        </Typography>
      </ContentLayout>

      <AlimentsRadials />

      <ContentLayout>
        <hr className={classes.separator} />
        <Typography variant="body1">
          Les <span className={classes.strong}> 10 fruits</span> les plus consommés
        </Typography>
      </ContentLayout>

      <AlimentsRadials alimentCategory="fruit" />

      <ContentLayout>
        <Typography variant="body1" gutterBottom>
          Qu'est-ce que l'on peut apprendre sur le menu des cantines grâce à l'open data
          et à la dataviz ? C'est la question que l'on s'est posé (Florian Melki et Edith Maulandi).
        </Typography>

        <Typography variant="h5" className={classes.title} color="secondary">
          Produits bio et produits industriels
        </Typography>

        <Typography variant="body1" gutterBottom>
          Qu'est-ce que l'on peut apprendre sur le menu des cantines grâce à l'open data
          et à la dataviz ? C'est la question que l'on s'est posé (Florian Melki et Edith Maulandi).
        </Typography>

        <Typography variant="h4" className={classes.title} color="primary">
          Pour la suite
        </Typography>

        <Typography variant="body1" gutterBottom>
          Qu'est-ce que l'on peut apprendre sur le menu des cantines grâce à l'open data
          et à la dataviz ? C'est la question que l'on s'est posé (Florian Melki et Edith Maulandi).
        </Typography>
      </ContentLayout>

      <Footer />
    </div>
  );
}

export default App;
