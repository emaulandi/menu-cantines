/* eslint-disable max-len */
import React from 'react';

import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import ContentLayout from './components/ContentLayout';
import AlimentRadial from './components/AlimentRadial';
import AlimentsRadials from './components/AlimentsRadials';
import ImageCard from './components/ImageCard';
import BioPercentChart from './components/BioPercentChart';
import Footer from './components/Footer';

export const smallScreenMediaQuery = '(max-width: 1000px)';
export const isSmallScreen = window.matchMedia(smallScreenMediaQuery).matches;

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
    color: 'white',
    background: theme.palette.secondary.light,
    padding: '2px 5px',
    borderRadius: '2px',

    '&:hover': {
      background: 'grey',
      color: 'black',
      textDecoration: 'none',
    },
  },
  separator: {
    color: theme.palette.primary.light,
    margin: theme.spacing(2, 0),
    opacity: 0.3,
  },
  spacedList: {
    '& li': {
      marginBottom:  theme.spacing(1),
    },
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
          🗃 Comment choisir un jeu de données et le manipuler ?
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
          Nous avons retenu <Link className={classes.niceLink} target="_blank" rel="noreferrer" href="https://data.nantesmetropole.fr/explore/dataset/244400404_menus-cantines-nantes-2011-2019/table/">ce dernier</Link> pour sa periode étendue.
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
            <li>Quels types de légumes / fruits sont les plus présents ?</li>
            <li>Il y a-t-il des produits transformés ?</li>
            <li>Quelle est l'évolution de la proportion des types d'aliments et de la composition d'un repas <i>(apparition légumineuses, repas végétarien ...)</i> au cours du temps ?</li>
            <li>Quid du bio ?</li>
          </ul>
        </Typography>

        <Typography variant="h5" className={classes.title} color="secondary">
          Traitement du jeu de données : catégoriser pour mieux régner
        </Typography>

        <Typography variant="body1" gutterBottom>
          Armés d'huile de coude, de feuilles de calcul partagées et d'un environnement de travail Python partagé <i>(Jupyter Notebook)</i>,
          nous avons traité le fichier pour apporter plus d'informations catégoriques à partir du champ <span className={classes.strong}>plat</span> disponible :
          <ul className={classes.spacedList}>
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
          title="Processus"
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

        <Typography variant="h4" className={classes.title} color="primary">
          📊 Exploration visuelle
        </Typography>

        <Typography variant="body1" gutterBottom>
          Dans cette phase exploratoire, l'idéal est d'utiliser des outils que l'on maitrise déjà et qui permettre de produire
          différent type de graphiques rapidement.
        </Typography>

        <Typography variant="h5" className={classes.title} color="secondary">
          Les outils
        </Typography>

        <ImageCard
          imgSrc="data_studio_tool.png"
          title="Data Studio (Google)"
          description="Interface de Data Studio : une zone de mise en page et une zone de configuration qui permet d'ajouter des fichiers et construire des graphiques étape par étape."
        />

        <Typography variant="body1" gutterBottom>
          Dans le cadre de ce projet, nous avons utilisé les outils suivant :
          <ul className={classes.spacedList}>
            <li><b>Data Studio</b> (pour Florian) :</li>
            <ul>
              <li> + Outil “no code”</li>
              <li> + Rapide pour la recherche exploratoire</li>
              <li> + Interactif</li>
              <li> + Gratuit</li>
              <li> - Limité dans les représentations offertes</li>
              <li> - Pas toujours clair pour les calculs</li>
            </ul>
            <li><b>Notebook Observable et la librairie Plot</b> (pour Edith) :</li>
            <ul>
              <li> + Notebook reactif dans le navigateur, rapide à mettre en place”</li>
              <li> + Des librairies disponibles pour explorer les données facilement + multiples exemples</li>
              <li> + Expérimentation et intégration future avec d3 facilité</li>
              <li> - Nécessite des connaissances de bases en Javascript</li>
            </ul>
            <li><b>D3.js</b> (pour Florian) :</li>
            <ul>
              <li> + Rapide pour prototyper des représentations spécifiques</li>
              <li> - Long pour rendre un produit abouti</li>
            </ul>
          </ul>
          Mais d'autres sont aussi très intéressants : en restant côté Python <i>(seaborn, plotly)</i>, nocode avec Tableau / Excel, R avec shiny ...
        </Typography>

        <ImageCard
          imgSrc="observable_tool.png"
          title="Observable"
          description="Interface d'Observable : un peu comme un notebook mais en Javascript, on peut utiliser d3.js mais aussi d'autres librairies de visualisations comme Plot ou vega lite."
        />

        <Typography variant="body1" gutterBottom>
          Le but ? utiliser des graphiques simples pour <b>mieux comprendre les données</b>
          et <span className={classes.strong}>décider si une piste d'analyse</span> est intéressante à creuser davantage ou non.
        </Typography>

        <Typography variant="body1" gutterBottom>
          C'est aussi l'occasion de commencer à réfléchir à des représentation intéressante. En fonction de mon message, ce que je veux montrer,
          <b>quel type de graphique serait le plus intéressant ?</b> Nous avons expérimenté d'autres types de réprésentation que nous avons gardé
          avec ces outils ou développé par ailleurs ensuite.
        </Typography>

        <ImageCard
          imgSrc="too_many_charts.jpg"
          title="Trop de graphiques ..."
          description="Trop de graphiques ... pas lisibles, il y en a dans tous les sens, mais c'est ça l'exploration !"
        />

        <Typography variant="h4" className={classes.title} color="primary">
          🌟 Nos trouvailles
        </Typography>

        <Typography variant="body1" gutterBottom>
          Après cette pahse d'exploration visuelle, nous avons choisit de retenir 3 axes particuliers sur lesquels se concentrer
          et produire des visualisations plus abouties.
        </Typography>

        <Typography variant="h5" className={classes.title} color="secondary">
          1/ Consommation de viandes et poissons
        </Typography>

        <Typography variant="body1" gutterBottom>
          Les catégories d'aliments ajoutés dans la phase précédente nous ont permi d'explorer leur évolutions dans le temps.
          Nous étions particulièrement curieux de voir, peut-être, une évolution de la consommation de viande entre 2011
          et 2020.
        </Typography>

        <ImageCard
          imgSrc="viande_general.png"
          title="Nombre de plats avec viande"
          description="Nombre de plat avec viande par mois au cours du temps"
        />

        <Typography variant="body1" gutterBottom>
          Au global, on peut voir une petite diminution du nombre de plat contenant de la viande par mois <i>(en mettant de côté plusieurs mois en 2013 où nous avons des données manquantes). </i>
          Cette vue étant très générale, nous avons exploré d'autres manières de représenter l'évolution de la consommation de viande.
        </Typography>

        <Typography variant="body1" gutterBottom>
          Nous avons retenue une vue calendrier, car elle permet de "s'imaginer" à la cantine, une case représentant un jour. Il est moins évident
          de voir une tendance globale en quelques secondes, mais c'est l'occasion d'explorer la visualisation et de se "créer" une interprétation
          à partir de cette vue par jour.
        </Typography>

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
          Avec cette représentation sous format de calendrier, on peut regarder d'abord les cases plus foncées, représentant une journée sans viande.
          Il est plus compliqué ici de voir une évolution année par année de la commation de viande.
        </Typography>

        <Typography variant="body1" gutterBottom>
          Cependant, un autre aspect intéressant de cette représentation est de grouper les menus par jour de la semaine, et cela peut nous permettre
          de découvrir des patterns : voyez-vous quelque chose de spécifique le vendredi ? Apparement, le poisson est toujours au rendez-vous
          les vendredis, et ce depuis 2011 !
        </Typography>

        <Typography variant="body1" gutterBottom>
          Les <span className={classes.strong}>limites</span> :
          <ul className={classes.spacedList}>
            <li>Il est important de vérifier d'éventuels trous dans les données. On voit facilement avec la vue calendrier qu'il manque des données sur plusieurs mois en 2013, mais cela peut être moins évident dans des vue plus générale.</li>
            <li>On peut noter dans la vue calendrier qu'il y a des jours sans données, et des jours avec viande rouge et blanche : il faudrait vérifier plus attentivement le processus de catégorisation</li>
          </ul>
        </Typography>

        <Typography variant="body1" gutterBottom>
          À noter côté <span className={classes.strong}>dataviz</span> :
          <ul>
            <li>Il est intéressant d'expérimenter plusieurs niveau de détails : une vue générale <i>(total par mois)</i> et une vue détaillée par jour plus facile à appréhender peuvent être complémentaires.</li>
            <li>Utiliser ces différents niveaux d'agrégation est intéressant pour découvrir des patterns dans les données</li>
          </ul>
        </Typography>

        <Typography variant="h5" className={classes.title} color="secondary">
          2/ Produits bio et produits industriels
        </Typography>

        <Typography variant="body1" gutterBottom>
          Comme pour l'évolution de la consommation de viandes, nous avons regardé la quantité de produits bio au cours du temps.
          Ici on représente mois par mois le pourcentage moyen de produits bio par jour. On peut noter une augmentation à partir de
          2016 où l'on passe régulièrement au dessus de 15% jusqu'à atteindre 25% certains mois.
        </Typography>
      </ContentLayout>

      <BioPercentChart config={isSmallScreen ? 'smallScreen' : 'default'} />

      <ContentLayout>
        <Typography variant="body1" gutterBottom>
          Nous avons aussi essayé de définir les produits industriels <i>(dans le sens non préparé sur place)</i> et étudier leur consommation. Il a été intéressant de constater qu'un nombre
          non négligeable de produits étaient à la fois bio et industriels, notamment pour les desserts et les laitages.
        </Typography>

        <ImageCard
          imgSrc="ketchup.png"
          title="Ketchup"
          description="On peut aussi regarder un seul aliment en particulier ! Est-ce que l'on mange toujours du ketchup ? (Nombre de plat avec la mention 'ketchup' par an)"
        />

        <Typography variant="body1" gutterBottom>
          Les <span className={classes.strong}>limites</span> :
          <ul className={classes.spacedList}>
            <li>Ici on utilise la mention "bio" dans le libellé des plats. C'est un élément déclaratif : il est possible que la quantité de bio ait été régulière depuis 2011, mais mieux indiqué dans les données au fil du temps.</li>
            <li>Pour les plats préparé et industriel <i>(hachis parmentier, ratatouille…)</i>, il n'est pas forcément facile de différencier à partir du texte si c'est un plat préparé sur place ou industriel <i>(exemple : "Poêlée ratatouille Bonduelle", "ratatouille", "ratatouille maison")</i>. La catégorisation est à améliorer.</li>
          </ul>
        </Typography>

        <Typography variant="body1" gutterBottom>
          À noter côté <span className={classes.strong}>dataviz</span> :
          <ul className={classes.spacedList}>
            <li>Pour raconter une histoire, il peut être intéressant de partir d'un élément particulier parmi tous pour attirer l'attention sur un produit connu, ici le ketchup.</li>
          </ul>
        </Typography>

        <Typography variant="h5" className={classes.title} color="secondary">
          3/ Saisons
        </Typography>

        <Typography variant="body1" gutterBottom>
          Concernant les fruits et légumes, nous avons ajouté au cours de l'analyse une nouvemme pise d'exploration : <b>la saisonnalité</b>. Est-ce que les fruits et légumes consommés sont de saison ?
          Pour pouvoir répondre à cette question, nous avons créer un jeu de données complémentaire à partir du site de Greenpeace listant
          la  <Link className={classes.niceLink} href="https://www.greenpeace.fr/guetteur/calendrier/" target="_blank" rel="noreferrer">saisonalité des produits</Link>.
        </Typography>

        <Typography variant="body1" gutterBottom>
          Dans le traitement des données, nous avons rajouté une étape qui détermine pour chaque plat contenant un fruit / légume si celui-ci existe dans la "base" de saisonalité
          et si oui, indique si la date du plat correspond à un mois où ce produit est de saison.
        </Typography>

        <Typography variant="body1" gutterBottom>
          Nous avons compté par mois <i>(sans détail par année)</i>, le nombre de fois où le produit a été consommé en comptant positivement la consommation un mois de saison,
          et négativement un mois <b>hors</b> saison.
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
          Dans cette représentation en grille, les colonnes représentent les mois, les lignes un fruit ou légume. On retrouve en haut les produits les plus consommés.
        </Typography>

        <Typography variant="body1" gutterBottom>
          <span className={classes.strong}> Légumes</span>
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
          <span className={classes.strong}> Fruits</span>
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
          D'autres représentations plus originales ?
        </Typography>

        <Typography variant="body1" gutterBottom>
          Dans sa conférence <Link className={classes.niceLink} href="https://lisacharlottemuth.com/2017/03/10/why-do-we-visualize-data/" target="_blank" rel="noreferrer">Why do we visualize data ?</Link>
          , Lisa Muth de Datawrapper nous questionne sur nos buts en réalisant des visualisations de données. Veut-on créer :
          <ul>
            <li>de l'<b>attention</b> et de la <b>beauté</b> ?</li>
            <li>de la <b>compréhension</b> ?</li>
            <li>de l'<b>implication</b> ?</li>
          </ul>
        </Typography>

        <ImageCard
          imgSrc="whyvisualize.png"
          title="Why do we visualize data ?"
          description="Pourquoi visualise-t-on des données ? Les buts de la visualisation expliqués avec brio par Lisa Muth"
        />

        <Typography variant="body1" gutterBottom>
          Bien sur ces buts peuvent être combinés, mais c'est en fonction d'eux que l'on ferra des choix de représentations. Le format en grille plus haut nous semble
          pertinent pour la <b>compréhension</b>. Nous avons donc fait aussi l'exercice de trouver un autre format pour travailler le but de capter l'attention, plus axé sur l'esthétique.
        </Typography>

        <AlimentRadial
          svgId="test"
          svgSide={370}
          aliment="chou"
          label="chou"
        />

        <Typography variant="body1" gutterBottom>
          En utilisant l'aspect cyclique des mois, nous avons créé avec D3 et à partir d'exemples existant sur Observable, un graphique en barre radial par semaine.
          Ici on double l'encodage lié à saison / hors saison : en plus de la couleur, nous utlisons l'axe y pour séparer dans l'espace les valeurs positives et négatives
          pour marquer encore plus cet aspect visuellement.
        </Typography>

        <Typography variant="body1" gutterBottom>
          Est-ce que cela peut fonctionner pour plusieurs produits ? Prenons l'exemple pour les 10 fruits et 10 légumes les plus consommés :
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
          <ul className={classes.spacedList}>
            <li>Cette analyse se base sur un référentiel qui n'inclut pas banane / ananas car hors France ➡️ différentes notions de "saison" peuvent être choisies</li>
            <li>On trouve un fruit / legume correspondant pour 67% des plats identifiés comme tel en utilisant le texte libre. Les plats préparés et industriel ne sont pas détaillé par aliment spécifique et donc non pris en compte <i>(ex: on ne compte donc pas la pomme de terre dans le hachis parmentier)</i></li>
            <li>On utilise le fruit / legume que l'on trouve dans le texte sans distinction, et on passe outre des nuances importantes. Par exemple la compote de pomme a surement été frabriquée à la récolte des fruits et donc de saison. Hors ici elle va être catégorisée "hors saison".</li>
          </ul>
        </Typography>

        <Typography variant="body1" gutterBottom>
          À noter côté <span className={classes.strong}>dataviz</span> :
          <ul className={classes.spacedList}>
            <li>
              Dans la représentation radiale, on se heure à deux <b>"mensonges"</b>. D'abord, les barres sont déformés du fait de l'axe radial.
              On ne représente plus exactement les données dans ce cas, l'axe négatif étant de fait réduit. Par ailleurs, on n'a pas définit de règles
              quand aux produits qui n'ont que des valeurs positivies / négatives. Dans ce cas, les valeurs prennent plus d'espace et on ne peux pas facilement
              <b>comparer</b> les fruits/légumes entre eux, la représentation peut être <b>trompeuse</b>.
            </li>
            <li>Dans quel contexte et dans quel objectif visualisez-vous ? Il est toujours utilise de se reposer la question à chaque étape du projet.</li>
          </ul>
        </Typography>

        <Typography variant="body1" gutterBottom>
          À noter côté <span className={classes.strong}>data</span> :
          <ul className={classes.spacedList}>
            <li>Il est souvent intéressant d'<b>enrichir</b> un jeu de données avec jeu de données complémentaire. Posez-vous la question dès le début du projet : <i>"Quelles autres informations pourraient être intéressantes avec celles dont je dispose déjà ?"</i></li>
            <li>Pas de jeux de données disponibles ? Dans certains cas, on peut en <b>construire soi-même</b> ! Ici nous avons utilisé un site listant les produits de saisons et l'avons mis en forme de tableau pour pouvoir l'exploiter facilement.</li>
          </ul>
        </Typography>

        <Typography variant="h4" className={classes.title} color="primary">
          ⏭️ Pour la suite
        </Typography>

        <Typography variant="body1" gutterBottom>
          Déjà beaucoup d'éléments partagés, et pourtant beaucoup d'autres autres axes d'analyses auraient pu être investigués à partir de ce jeu de données
          <i>relativement simple (date, plat)</i>. Nous espérons que l'explication du processus que nous avons suivi pourra <span className={classes.strong}>vous donner envie de mener vos propres projets</span>
          ainsi que des pistes d'analyses et de représentations.
        </Typography>

        <Typography variant="body1" gutterBottom>
          Pour résumer nos apprentissages, voici les <span className={classes.strong}>points clés</span> que nous voudrions vous transmettre à travers ce projet :
        </Typography>

        <Typography variant="body1" gutterBottom>
          À noter côté <span className={classes.strong}>data</span> :
          <ul className={classes.spacedList}>
            <li><b>Etre conscient des limites du jeu de données</b> / de sa propre analyse / de son interprétation</li>
            <li><b>Croiser avec les autres jeux de données</b> <i>(voire les construire)</i></li>
            <li>La <b>dataviz est un bon outil pour explorer</b> des pistes, infirmer des hypothèses</li>
            <li><b>Parler avec des gens du métier</b> : producteur de la donnée, praticien, politique...</li>
          </ul>
        </Typography>

        <Typography variant="body1" gutterBottom>
          À noter côté <span className={classes.strong}>dataviz</span> :
          <ul className={classes.spacedList}>
            <li><b>Concevoir ses visualisations</b> de données en fonction de son <b>auditoire</b> et de son <b>objectif</b></li>
            <li><b>Expérimenter</b> et tester différents niveaux de granularité</li>
            <li>Retravailler les données pour être plus <b>pertinent</b></li>
            <li>Différents <b>types de rendus</b> : statique <i>(image, poster)</i>, exploratoire <i>(dashboard)</i>, site web, scrollytelling … à aligner aves ses objectifs</li>
          </ul>
        </Typography>
      </ContentLayout>

      <Footer />
    </div>
  );
}

export default App;
