/* eslint-disable max-len */
import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import ContentLayout from './components/ContentLayout';
import AlimentRadial from './components/AlimentRadial';
import AlimentsRadials from './components/AlimentsRadials';
import ImageCard from './components/ImageCard';
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
          une étude open bar sur des données ouvertes sans a priori <i>(et sans obligation de résultat)</i>. Nous allons voir avec vous comment cet exemple peut nous
          éclairer sur l'utilisation des jeux de données en open data et de l'usage de la dataviz pour les comprendre et les valoriser.
        </Typography>

        <Typography variant="h4" className={classes.title} color="primary">
          Comment choisir un jeu de données et le manipuler ?
        </Typography>

        <Typography variant="h5" className={classes.title} color="secondary">
          Sélection
        </Typography>

        <Typography variant="body1" gutterBottom>
          Nous avons parcouru les portails open data de plusieurs villes en cherchant un jeu de données qui aurait plusieurs
          année d'historiques et qui soit relativement exploitable <i>(par exemple avec des catégories déjà définies)</i>.
        </Typography>

        <Typography variant="body1" gutterBottom>
          Parmi plusieurs villes, deux jeux de données nous ont paru les plus intéressant :
          <ul>
            <li>Le menu des cantines de <span className={classes.strong}>Toulouse</span> : très bien formaté, il n'est disponible que sur une fenêtre temporelle glissante</li>
            <li>Le menu des cantines de <span className={classes.strong}>Nantes</span> : non standardisé, il couvre 9 ans d'historique de 20211 à 2019</li>
          </ul>
          Nous avons retenu ce dernier pour sa periode étendue.
        </Typography>

        <Typography variant="body1" gutterBottom>
          Le fichier des menus des cantines de Nantes contient uniquement deux colones :
          une <span className={classes.strong}>date</span> et un <span className={classes.strong}>plat</span> <i>(texte libre)</i>.
          En parcourant rapidement le fichier, nous avons vu que ce champ plat en texte libre allait nous donner du fil à retorde. Il faudrait
          passer un peu de temps à le traiter pour permettre des analyses intéressantes.
        </Typography>

        <Typography variant="h5" className={classes.title} color="secondary">
          De premières idées d'analyses
        </Typography>

        <Typography variant="body1" gutterBottom>
          Mais avant même de le traiter, nous avons posé nos idées d'analyses à cette étape très en amont du projet.
          Le but était de lister en vrac toutes les choses qui pourraient être investiguées à partir de ce jeu de données : les
          questions que l'on se pose, les analyses que l'on aimerait lire le sujet ...
        </Typography>

        <Typography variant="body1" gutterBottom>
          À nous ensuite d'arbitrer ou d'en rajouter selon l'évolution du projet, la manière dont on peut le travailler, le temps disponible ...
        </Typography>

        <Typography variant="body1" gutterBottom>
          Voici les pistes que nous avons listé à ce stade :
          <ul>
            <li>Y a-t-il des cycles ?</li>
            <li>Diversification / quali ?</li>
            <li>Quels types de légumes ?</li>
            <li>Présence de produits transformé ?</li>
            <li>Quid du bio ?</li>
            <li>Evolution de la proportion des types d'aliments et de la composition d'un repas <i>(apparition légumineuses, repas végé...)</i> au cours du temps</li>
          </ul>
        </Typography>

        <Typography variant="h5" className={classes.title} color="secondary">
          Traitement du jeu de données : catégoriser pour mieux régner
        </Typography>

        <Typography variant="body1" gutterBottom>
          Armés d'huile de coude, de feuilles de calcul partagées et d'un environnement de travail Python partagé <i>(Jupyter Notebook)</i>,
          nous avons traité le fichier pour apporter plus d'informations catégoriques à partir du champ <span className={classes.strong}>plat</span> disponible :
          <ul>
            <li>Création d'une liste d'aliment parmi : viande rouge / viande blanche / poisson et fruit de mer / legume / fruit / laitage</li>
            <li>Etiquettage de chaque plat avec ces catégories avec un <span className={classes.strong}>objectif de couvrir au moins 95% des plats</span></li>
            <li>Création d'un liste de plat pour pointer aussi les produits préparés et industriels et définir leur composition en catégorie d'aliment</li>
            <li>Création d'un liste de texte à exclure <i>(le champ plat étant aussi utilisé pour indiquer des évènements particuliers comme le repas de nöel)</i></li>
            <li>Etiquettage des produits bio <i>(mention disponible dans champ plat)</i></li>
            <li>Agrégation des lignes du même jour pour obtenir la pondération par jour des catégories d'aliments <i>(pour un jour donnée, nous pouvons voir le pourcentage de féculent, de bio ...)</i></li>
          </ul>
        </Typography>

        <ImageCard
          imgSrc="process.png"
          title="Hello"
          description="Processus de traitement : à partir de l'étiquettage par catégorie, on ajoute une pondération
          de présence des aliments plat par plat, puis on aggrège par jour."
        />

        <Typography variant="body1" gutterBottom>
          Nous avons rencontrés plusieurs <span className={classes.strong}>difficultés</span> dans ce processus pour gérer :
          <ul>
            <li>la variété d’orthographe : boeuf / bœuf</li>
            <li>les fautes : omellette</li>
            <li>les accents : Pâtes vs pâté</li>
            <li>les plats hors catégories <i>(préparé et industriel)</i> : hachis parmentier, ratatouille… </li>
          </ul>
        </Typography>

        <Typography variant="body1" gutterBottom>
          Des <span className={classes.strong}>limites importantes</span> sont aussi à noter :
          <ul>
            <li>Pour le bio, nous avons utilisé la mention dans le texte libre du champ, c'est déclaratif. Il est aussi possible que cette mention ne soit pas présente et qu'un aliment soit bio, où qu'elle soit utilisée différement au cours du temps.</li>
            <li>Pour les plats préparé et industriel <i>(hachis parmentier, ratatouille…)</i> comme différencier à partir du texte si c'est un plat préparé sur place ou industriel ? <i>(exemple : "Poêlée ratatouille Bonduelle", "ratatouille", "ratatouille maison")</i></li>
          </ul>
        </Typography>

        <Typography variant="h4" className={classes.title} color="primary">
          Exploration visuelle
        </Typography>

        <Typography variant="body1" gutterBottom>
          Dans cette phase exploratoire, l'idéal est d'utiliser des outils que l'on maitrise déjà et qui permettre de produire
          différent type de graphiques rapidement pour mieux comprendre les données et décidier si une piste d'analyse est intéressante à creuser davantage.
        </Typography>

        <Typography variant="h5" className={classes.title} color="secondary">
          Les outils
        </Typography>

        <Typography variant="body1" gutterBottom>
          <ul>
            <li><b>Data Studio</b> (pour Florian) : + / - </li>
            <li><b>Notebook Observable et la librairie Plot</b> (pour Edith) : + - </li>
            <li><b>D3.js</b> (pour Florian) : + - </li>
          </ul>
          Mais d'autres sont aussi très intéressants : en restant côté Python <i>(seaborn, plotly)</i>, nocode avec Tableau / Excel, R avec shiny ...
        </Typography>

        <Typography variant="h4" className={classes.title} color="primary">
          Nos trouvailles
        </Typography>

        <Typography variant="body1" gutterBottom>
          Après cette pahse d'exploration visuelle, nous avons choisit de retenir 3 axes particuliers sur lesquels se concentrer
          et produire des visualisations plus abouties.
        </Typography>

        <Typography variant="h5" className={classes.title} color="secondary">
          Consommation de viandes et poissons
        </Typography>

        <Typography variant="body1" gutterBottom>
          Qu'est-ce que l'on peut apprendre sur le menu des cantines grâce à l'open data
          et à la dataviz ? C'est la question que l'on s'est posé (Florian Melki et Edith Maulandi).
        </Typography>

        TBD Ajouter image recap datastudio

        <iframe
          title="meat color scale"
          className={classes.chartContainer}
          width="100%"
          height="120"
          frameBorder="0"
          src="https://observablehq.com/embed/857101b245272036?cells=typemeal"
        />

        <iframe
          title="meat grid"
          className={classes.chartContainer}
          width="100%"
          height="650"
          frameBorder="0"
          src="https://observablehq.com/embed/857101b245272036?cells=meatgrid"
        />

        <Typography variant="body1" gutterBottom>
          Les <span className={classes.strong}>limites</span> :
          <ul>
            <li>Il est important de vérifier d'éventuels trous dans les données. On voit facilement avec la vue calendrier qu'il manque des données sur plusieurs mois en 2013, mais cela peut être moins évident dans des vue plus générale.</li>
            <li>On peut noter dans la vue calendrier qu'il y a des jours sans données, et des jours avec viande rouge et blanche : il faudrait vérifier plus attentivement le processus de catégorisation</li>
          </ul>
        </Typography>

        <Typography variant="body1" gutterBottom>
          À noter côté <span className={classes.strong}>dataviz</span> :
          <ul>
            <li>Vue général et statistique vs vue détaillée plus relatable</li>
            <li>deux</li>
          </ul>
        </Typography>

        <Typography variant="h5" className={classes.title} color="secondary">
          Saisons
        </Typography>

        <Typography variant="body1" gutterBottom>
          Qu'est-ce que l'on peut apprendre sur le menu des cantines grâce à l'open data
          et à la dataviz ? C'est la question que l'on s'est posé (Florian Melki et Edith Maulandi).
        </Typography>

        <iframe
          title="saison color scale"
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
          Les <span className={classes.strong}>limites</span> :
          <ul>
            <li>Cette analyse se base sur SOURCE qui n'inclut pas banane / ananas car hors France ➡️ différentes notions de "saison" peuvent être choisies</li>
            <li>On trouve un fruit / legume correspondant pour 67% des plats identifiés comme tel en utilisant le texte libre. Les plats préparés et industriel ne sont pas détaillé par aliment spécifique et donc non pris en compte <i>(ex: on ne compte donc pas la pomme de terre dans le hachis parmentier)</i></li>
            <li>On utilise le fruit / legume que l'on trouve dans le texte sans distinction, et on passe outre des nuances importantes. Par exemple la compote de pomme a surement été frabriquée à la récolte des fruits et donc de saison. Hors ici elle va être catégorisée "hors saison".</li>
          </ul>
        </Typography>

        <Typography variant="body1" gutterBottom>
          À noter côté <span className={classes.strong}>dataviz</span> :
          <ul>
            <li>Vue général et statistique vs vue détaillée plus relatable</li>
            <li>deux</li>
          </ul>
        </Typography>

        <Typography variant="body1" gutterBottom>
          À noter côté <span className={classes.strong}>data</span> :
          <ul>
            <li>Il est souvent intéressant d'<b>enrichir</b> un jeu de données avec jeu de données complémentaire. Posez-vous la question dès le début du projet : "qullees autres informations pourraient être intéressantes avec celles dont je dispose déjà ?"</li>
            <li>Pas de jeux de données disponibles ? Dans certains cas, on peut en <b>construire soi-même</b> ! Ici nous avons utilisé un site listant les produits de saisons et l'avons mis en forme de tableau pour pouvoir l'exploiter facilement.</li>
          </ul>

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
