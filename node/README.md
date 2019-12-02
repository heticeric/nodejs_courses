# Node.js

## Qu'est-ce que node.js ?

Node.js est un :

-   **outil de création de serveurs** (HTTP, TCP, DNS, …)
-   **javascript** basé sur le moteur d'exécution V8 de Google (C++)
-   utilisant **sur une boucle événementielle** *mono threadée*
-   **dont les accès en écriture/lecture (IO) sont asynchrones**

## Pourquoi utiliser node.js ?

Ce qui distingue cette technologie des autres :

-   plus bas niveau qu'Apache, **permet de créer le serveur web
    entièrement**. Node.js == Apache (pas le langage interprété php)
-   destiné particulièrement pour des **sites hautes performances**,
    node.js permet de définir des *callback*
-   une **seule boucle événementielle** traite toutes les requêtes
    (contrairement à Apache…)
-   tous les **traitements IO sont asynchrones**, c'est-à-dire qu'ils ne
    bloquent pas l'exécution
-   node.js est parfait pour les sites à fort traffic, avec peu de
    charge CPU
-   le format **JSON** en natif
-   utilisez le javascript des deux côtés du tube
-   meilleures montées en charge
-   **socket**, **websockets**

## Node.js primer : mode REPL (Read-Evaluate-Print-Loop)

En démarrant une instance de node.js, nous accédons au runtime
javascript :

```javascript
node
```
Commençons donc à saisir quelques atrocités javascript…

```javascript
undefined == null //true

"Why am I a " + typeof + "";
// "Why am I a number" (courtesy of http://www.wtfjs.com)
```

Quelques raccourcis pratiques

```javascript
.help
.exit
```

