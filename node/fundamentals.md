# Fondamentaux Node.js

```javascript
node main.js
```

- lance le fichier main.js comme point d'entrée de l'application
- attention, **toute erreur arrête le déroulement de l'exécution**

*cf. 00-hellonode*


## Qu'est-ce que la boucle événementielle ?

*[Exemple pour appréhender la boucle évenementielle](./examples/01-eventloop/main.js)*

Il n'y a pas d'exécution parallèle en node.js.

La boucle bloque donc, et setTimeout ne pourra s'effectuer qu'après son
interruption, soit 4 secondes après.

Programmer sur node.js nécessite donc de comprendre le déroulement de la pile
d'appel de la virtual machine (VM).

En effet, le principe essentiel est que le principal goulet d'étranglement des
serveurs web sont leurs opérations IO, tel que lire un fichier, accéder à une
base de données…

**Node.js, pour sa part, permet d'enregistrer les processus asynchrones sous
forme d'événements**.

Bien sûr, ces opérations s'exécuteront sur des threads ou des processus séparés
au niveau du système, mais de façon transparente au niveau du moteur javascript.
![node eventlopp](../images/node-eventloop.png)


## Event loop HTTP

*[Exemple de serveur HTTP simple](./examples/02-simple_http/main.js)*

Création d'un serveur HTTP.

Une fois démarré, le serveur attend les connections de clients HTTP sur le port
8080.

Contrairement au premier exemple, le programme n'est pas arrêté après la
dernière commande.

**  A noter :**

-   principe des callback sous forme de fonctions anonymes
-   les paramètres passés qui permettent d'intervenir sur les messages
-   le programme est persistant, et contrairement au PHP, ne fait pas appel à un
    interprèteur  à chaque requête. L'état du serveur est conservé en mémoire
    jusqu'à ce qu'il soit éteint depuis le shell (Cmd-D)



## TCP socket

*[Example de serveur TCP](./examples/03-telnetchat/main.js)*

Utilisez la ligne de commande suivante pour vous y connecter :

Sur osx
```shell
nc 127.0.0.1 1234
```

Sur *nux ou windows
```shell
telnet 127.0.0.1 1234
```

Toutefois, attention aux déconnexions

```shell
events.js:72
        throw er; // Unhandled 'error' event
              ^

Error: This socket has been ended by the other party
    at Socket.writeAfterFIN [as write] (net.js:276:12)
    at /Volumes/soto/eric/Taf/formation/node.js/haxetelier/lab/01-telnet_chat/main.js:32:10
    at Array.forEach (native)
    at Socket.<anonymous> (/Volumes/soto/eric/Taf/formation/node.js/haxetelier/lab/01-telnet_chat/main.js:25:13)
    at Socket.EventEmitter.emit (events.js:95:17)
    at Socket.<anonymous> (_stream_readable.js:736:14)
    at Socket.EventEmitter.emit (events.js:92:17)
    at emitReadable_ (_stream_readable.js:408:10)
    at emitReadable (_stream_readable.js:404:5)
    at readableAddChunk (_stream_readable.js:165:9)
```

Comment éviter cette erreur ?
*[Example de serveur TCP corrigé](./examples/03-telnetchat/main2.js)*
