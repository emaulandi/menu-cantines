/* eslint-disable max-len */
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
    color: theme.palette.primary.main,
  },
  spacedList: {
    '& li': {
      marginBottom:  theme.spacing(1),
    },
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
              <ul className={classes.spacedList}>
                <li><Link className={classes.niceLink} target="_blank" rel="noreferrer" href="https://emaulandi.github.io/">Edith Maulandi</Link> est ingénieure et formatrice dataviz chez Makina Corpus. Elle dispense un cours d'introduction à la visualisation de données
                  pour EPF Montpellier <i>(école d'ingénieur.e.s)</i> et contribue au <Link className={classes.niceLink} href="https://www.meetup.com/fr-FR/Meetup-Visualisation-des-donnees-Toulouse/">meetup Toulouse Dataviz</Link>.
                </li>
                <li><Link className={classes.niceLink} target="_blank" rel="noreferrer" href="https://t.co/blSK8ZFfI0?amp=1">Florian Melki</Link> est ingénieur et data-analyst chez Dernier cri. Il co-organise le
                  <Link className={classes.niceLink} target="_blank" rel="noreferrer" href="https://www.meetup.com/fr-FR/DataViz-Nantes/">meetup dataviz Nantes</Link>.
                </li>
              </ul>
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h5" gutterBottom className={classes.title}>
              Méthodologie
            </Typography>
            <Typography variant="body1" gutterBottom>
              Voir les données <Link className={classes.niceLink} target="_blank" rel="noreferrer" href="https://data.nantesmetropole.fr/explore/dataset/244400404_menus-cantines-nantes-2011-2019/table/">sur le site open data de Nantes</Link>.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Vous pourrez retrouver le code de ce site sur <Link className={classes.niceLink} target="_blank" rel="noreferrer" href="https://github.com/emaulandi/menu-cantines">github</Link>
              , ainsi que :
              <ul className={classes.spacedList}>
                <li>
                  le <Link className={classes.niceLink} target="_blank" rel="noreferrer" href="https://github.com/emaulandi/menu-cantines/tree/master/data-processing">notebook python</Link> pour le traitement des données et les fichiers en entrée / sortie
                </li>
                <li>les notebook Observable sur <Link className={classes.niceLink} target="_blank" rel="noreferrer" href="https://observablehq.com/d/857101b245272036">les menus</Link> et <Link className={classes.niceLink} href="https://observablehq.com/d/aff01d184f7d36d5">les saisonalités</Link></li>
              </ul>
            </Typography>
            <Typography variant="body1" gutterBottom>
              La favicon pomme est designée par <Link className={classes.niceLink} target="_blank" rel="noreferrer" href="https://openmoji.org/">OpenMoji</Link>
              – le projet open-source d'emoji et d'icones. License: <Link className={classes.niceLink} target="_blank" rel="noreferrer" href="https://openmoji.org/">CC BY-SA 4.0</Link>.
            </Typography>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default Footer;
