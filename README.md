# Checkpoint n°2 Paris promo sep2017

*Checkpoint NodeJS* - **4h**

## Réaliser un blog fonctionnel avec serveur NodeJS

Pour ce travail tu as 4h devant toi. Ce checkpoint n'est pas un examen, il va nous permettre de valider tes compétences, essaye donc de le faire au maximum de ton côté. 
Ce checkpoint est très consistant, si tu n'arrives pas à tout faire ce n'est pas grave, fais de ton mieux ;) 


## Instructions

**Sans le forker**, clone le projet sur ton ordinateur.

Crée ensuite une branche portant ton prénom suivi de la première lettre de ton nom de famille et travaille dans cette branche. 
A la fin de l’exercice, il faudra faire un **push de cette branche** sur le remote. 

Le dépôt contient les fichiers et répertoires suivants:
* `./database.sql` : le fichier SQL pour générer ta base 
* `./package.json` : la description de ton projet
* `./bin/www` : le point d'entrée de ton serveur
* `./routes` : les différentes routes (front & admin)
* `./public` : les fichier du front
* `./config.js` : les identifiants pour te connecter à ta BDD

Regarde et **analyse bien** tous les répertoires et fichiers fournis !

Pense à faire le nécessaire pour installer tous les modules.

## Etape 1 - le front

Pour le front tu devras : 
* Afficher tous les articles de la BDD sur l'index. Cette vue est déjà prête dans `views/index.pug`.
* Au clic sur `voir plus` l'utilisateur arrivera sur une page ou il verra l'article en détail. L'URL sera du type `article-1` ou `article-2`. 
* Sur la page de l'article détaillé tu afficheras le titre, le texte et la date. Cette vue est déjà prête dans `views/article.pug`.


## Etape 2 - le back


Pour la partie administration tu auras deux routes principales `/admin` et `/admin/create`. Sur ces routes tu devras : 

* Gérer l'affichage des différents articles (`/admin`)
* Permettre l'ajout en BDD d'un article (`/admin/create`)
* Gérer le bouton d'effacement d'un article, l'article doit être effacé de la base (`/admin`)


## Etape 3 - Bonus

Il te reste du temps ? Parfait, tu vas pouvoir ajouter quelques fonctionnalités utiles !

* Ajouter l'upload d'image sur l'ajout de l'article 
* Ajouter une page de contact avec un envoi de mail
* Ajouter un système de login avec un utilisateur unique (login : `bob` / password : `superpassword`)


## Etape 4 - Et voilà...

Tu peux aller te désaltérer à la brasserie, tu l'as amplement mérité !!
NB. Tu ne dois pas commencer par cette étape... ;)


## Liens utiles 

* [Pug](https://pugjs.org/api/getting-started.html)
* [Express](https://expressjs.com/)
* [MySQL](https://www.npmjs.com/package/mysql)
