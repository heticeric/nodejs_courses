# Utiliser l'ecmascript 6 avec Node.js

## Environnement de développement

`nodemon` permet de relancer le serveur à chaque modificaton d'un des fichiers.

```js
npm install nodemon --save-dev
```

Puis ajoutez le script de lancement dans `package.json` 

```js
{
  ...
  "main": "main.js",
  "scripts": {
    "start": "nodemon src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
}
```

*[Exemple avec nodemon](./04-nodemn/main.js)*

En cas d'erreurs de code, la console vous renverra immédiatement la pile d'appel, êrmettant de corriger le problème.

## Un tour de Babel

Avant que `node.js` supporte toutes les nouveautés du language es6, il faut *transpiler* votre code avec [babel.js](https://babeljs.io/)

```js
npm install @babel/core @babel/node @babel/preset-env --save-dev
```

Puis dans un fichier `.babelrc`

```
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

Et finalement :

```js
{
  ...
  "main": "index.js",
  "scripts": {
    "start": "nodemon --exec babel-node src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

## Variables d'environnement

**Warning !**
Attention à ne jamais publier de mots de passe dans vos code source, et notamment sur github…
Pour cela, nous pouvins créer un fichier `.env` contenant tous nos petits secrets.

```sh
touch .env
```

Puis, y glisser des pairs clé-valeur sous la forme :

```sh
HETIC=roxs
```

La librairie `dotenv` vous permet ensuire d'y accéder simplement au sein de votre code.

```js
npm install dotenv --save
```

```js
import 'dotenv/config';
console.log(process.env.HETIC);
```
