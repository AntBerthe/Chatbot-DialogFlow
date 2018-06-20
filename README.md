# Chatbot Dialogflow

Cette application permet de converser avec un chatbot DialogFlow et d'envoyer les statistiques d'utilisation à chatbase.

##### Comment lancer l'application

Pour lancer l'application, placez-vous dans le dossier à la racine du projet. Entrez ensuite dans le terminal "node bin/www".
Allez ensuite à l'adresse "localhost:3000" dans votre navigateur, vous pouvez maintenant converser avec votre chatbot!

##### Fonctionnement et Particularités

Cette application est découpée en 3 parties : 	-BackEnd NodeJS et DialogFlow
						-FrontEnd BotUI
						-chatbase

Le BackEnd permet au serveur NodeJS de transmettre le texte de l'utilisateur sous forme de requête à DialogFlow. Il communique ensuite le résultat de la requête via Socket.IO au frontEnd.
Le FrontEnd concerne l'affichage des données : il contient la mise en page et l'interface utilisateur. Il est géré par BotUI et reçoit les données du BackEnd via Socket.IO
Les données sont envoyées à chatbase une fois une réponse venant de DialogFlow est reçue.


A chaque changement d'Agent DialogFlow, il faut changer la clé dans le fichier /config/api.js correspondant à la variable "". La clé d'un nouvel Agent se trouve sur le site DialogFlow, en cliquant sur le rouage a coté du nom de votre Agent.
A chaque changement de bot chatbase, il faut également changer la clé dans le fichier /config/chatbase.js correspondant à la variable " ". La clé d'un nouveau bot se trouve sur le site chatbase, sur la page montrant la liste des bots, en dessous du nom de chaque bot (un symbole de clé précède l'ID de la clé).