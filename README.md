# catmash

Application disponible à l'url:     __ec2-13-59-224-84.us-east-2.compute.amazonaws.com__

Dans le cas d'un lancement en local:

    docker-compose build
    docker-compose up

## Stack technique

Pour réaliser ce test technique j'ai fais le choix d'une architecture **MEAN Stack**. J'explique ci-après pourquoi j'ai choisi cette stack. J'ai également ajouter **typescript** pour le développement de la partie **Node.js**, je considère que ce language est toujours bénéfique, non seulement car il améliore le contrôle des données mais aussi pour l'auto-complétion qui en résulte. Pour faciliter le lancement de l'application j'ai décidé de la conteneuriser avec **Docker**. J'ai également utilisé les services **aws** afin de la déployer.

### MongoDB
Étant donné la nature non relationnelle des données à persister, j'ai décidé d'utiliser MongoDB comme SGBD. Sa grande fléxibilité et sa mise en place facile sur un environnement **Node.js** en ont fait un choix naturel pour ce mini projet. Pour autant, j'ai ajouté le module **mongoose** pour améliorer mon intéraction avec la base mais également mieux m'assurer de l'intégrité des données.

### Express
J'ai fais le choix du framework **Express.js** pour la partie back-end. Le considérant comme un standard pour la mise en place de serveur pour des projets de petite envergure, j'ai donc suivi les principes d'une architecture typique dans cette technologie.

### Angular
Étant particulièrement familier avec ce framework front-end et bien que particulièrement lourd pour une si petite application, j'ai décidé d'utiliser **Angular** pour la conception de mon application cliente. J'ai cherché à exploiter le maximum de fonctionnalités offertes par celui-ci afin d'en démontrer mes connaissances. Néanmoins la partie _style_ reste assez précaire et pourrai être améliorer.

**__Notes__**: J'ai pris la liberté d'user des données fournies par l'atelier à ma convenance. J'ai donc transformé la liste d'images proposées en liste de chats prétendants, pour lesquels l'_id_ a été transformé en nom.

## Dépendances

- body-parser
- cors
- express
- mongoose
- typescript