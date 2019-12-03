# Un serveur HTTP express

Le framework `express.js` est le plus utilisé pour la mise en œuvre de serveur HTTP reposant sur `node.js`. Il peut en effet servir à :
- recevoir des requêtes HTTP et les convertir en *vues* *(pug, handlebars, react,…)*, via un système de capture  apparenté aux *controllers*.
- être utilisé pour répondre à des appels en *REST*
- être le support d'une *API graphQL* 

## Minimal starter

Reprenons les éléments de notre serveur `node.js` ES6.
Ajoutons la dépendance nécessaire :

```js
npm install express
```

*[Exemple d'une application express simple](./examples/01-simple/main.js)*

## Système routier

Il faut désormais associer les *URL* envoyées depuis le poste client à des données. Appelées **routes**, ces fonctions se chargent de capturer les paramètres soumis, et de soumettre en retour une structure HTML.

*[Exemple d'une application express simple](./examples/02-route/main.js)*


### verbes HTTP :

- `delete( req, res, next )`
- `get( req, res, next )`
- `patch( req, res, next )`
- `post( req, res, next )`
- `put( req, res, next )`

### catch all request

La méthode `all()` capture toutes les requêtes.
Elle est souvent utilisée afin dans le cadre de *middleware* (cf. plus bas)

```js
app.all
(
    '/secret'
    , (req, res, next) => 
    {
        console.log('Accessing the secret section ...');
        next(); // The middleware convention : pass control to the next handler
    }
);
```

### Autoroutes de l'information

La plupart du temps, il sera pratique de groyper les routes par catégories.
Par exemple, cela est pratique dans le cadre d'*API REST*, afin d'exprimer tous les verbes disponibles pour une seule route.

L'objet `express.Router` est utilisé dans ce cas.

```js
// students.js 
import express from 'express';
var router = express.Router();

// `/students`
router.get
(
    '/'
    , (req, res) => res.send('Student home page');
);

// `/students/about`
router.get
(
    '/about'
    , (req, res) => res.send('About students');
);

exports default router;
```

Puis, la méthode `use()` va associer ce groupe à l'application générale.

```js
import students from "routes/students";
app.use( '/students', students );
```

### Paramétres nommés

Il est possible de récupérer des valeurs depuis l'*URL*.

```js
app.get
(
    '/student/:id'
    , (req, res) => console.log( req.params.id )
)
```

Plusieurs paramètres nommés peuvent ainsi être obtenu, via l'oject `params`.

Les expression régulières sont égakemennt permises :

```js
app.get
(
    /post/
    , (req, res) => { /* */ }
)
```

Cette expresssion régulière capturera 
- `/post`
- `/post/first`
- `/thepost`
- `/posting/something`


## Vues

Un exemple avec `react`.

```js
npm install express-react-views react react-dom
```

```js
import react_views from "express-react-views";
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine
(
    'jsx'
    , react_views.createEngine()
);
```

*[Exemple d'application express avec des vues react](./examples/03-react/main.js)*

## Middleware

Les middlewares sont des portions de code qui servent à de nombreux usages pour `express` :

- la gestion des cookies
- les fichiers statiques
- l'authentification
- la compression HTTP
- le stockage de *logs*

Ils reposent sur une signature de function commune, convention simple pour leur mise en marche.

```js
export default (req, res, next) => 
{
    // Handle request and response
    next();//<======= Pass to the next function handle
}
```

La function `next()` injectée en paramètre, permet le chaînage des middlewares.
Il faudra donc que ceux-ci aient un ordre précis, car le premier d'entre-eux traîtera les éléments de la requête dès le début.

### Middleware pour les fichiers statiques

```js
app.use( express.static( 'public' ) );
```

Toutes les routes suivantes aboutiroont à des fichiers sans traitement côté serveur.

- http://localhost:3000/images/hetic.jpg
- http://localhost:3000/images/hetic.css

### Middleware pour la gestion des erreurs

```js
app.use
(
    (err, req, res, next) => 
    {
        console.error( err.stack );
        res.status( 500 ).send( 'Something broke!' );
    }
);
```
