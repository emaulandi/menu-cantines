import React from 'react';
import { Container, Grid, Box, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  coloredFooter: {
    color: 'lightgrey',
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(10, 0),
    margin:  theme.spacing(15, 0, 0, 0),
  },
  title: {
    margin: theme.spacing(0, 0, 2, 0),
  },
  niceLink: {
    color: 'white',
    background: theme.palette.primary.main,
    padding: '2px 5px',
    borderRadius: '2px',

    '&:hover': {
      background: theme.palette.primary.light,
      color: theme.palette.primary.main,
      textDecoration: 'none',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.coloredFooter}>
      <Container maxWidth="md">
        <Grid container direction="row" spacing={4}>
          <Grid item xs={6}>
            <Typography variant="h5" gutterBottom className={classes.title}>
              Réalisé par
            </Typography>
            <Typography variant="body1" gutterBottom>
              Qu'est-ce que l'on peut apprendre sur le menu des cantines grâce à l'open data
              et à la dataviz ? C'est la question que l'on s'est posé
              (Florian Melki et Edith Maulandi).
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h5" gutterBottom className={classes.title}>
              Méthodologie
            </Typography>
            <Typography variant="body1" gutterBottom>
              Vous pourrez retrouver le code de ce site sur <Link className={classes.niceLink} href="#">github</Link> , ainsi que 
              le notebook python pour le traitement des données.
              Le notebook d'exploration des saisonalités est également disponible.
            </Typography>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default Footer;
