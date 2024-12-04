# MongoDB

## Description du projet : 
Ce projet est une application simple de gestion d'entrées (dans ce cas, des "chats") stockées dans une base de données MongoDB. L'objectif principal était de démontrer l’utilisation de MongoDB avec Node.js via Mongoose, et d’apprendre à manipuler une base de données NoSQL.

## Pile technologique : 
- **Node.js** : Serveur backend.
- **Express.js** : Framework web pour Node.js.
- **MongoDB** : Base de données NoSQL pour stocker les données.
- **Mongoose** : Bibliothèque pour interagir avec MongoDB dans une application Node.js.

## Fonctionnalités implémentées : 
Ce projet permet d’effectuer des opérations sur une collection de documents dans MongoDB à l’aide d'Express, avec les routes suivantes :

1. **Route** /create_entry

- **Méthode HTTP** : GET

- **Description** : Cette route permet d'ajouter une entrée (un chat) dans la base de données. Elle prend un paramètre catname via la query string.

- **Exemple de requête** :
http://localhost:3000/create_entry?catname=Whiskers

- **Comportement** : Si le paramètre catname est fourni, un nouveau chat sera créé et ajouté à la base de données MongoDB.

2. **Route** /get_entries

- **Méthode HTTP** : GET

- **Description** : Cette route récupère toutes les entrées de la base de données et les renvoie sous forme de JSON.

- **Exemple de requête** :
http://localhost:3000/get_entries

3. **Route** /get_kitten

- **Méthode HTTP** : GET

- **Description** : Permet de récupérer une entrée spécifique basée sur le nom du chat. La route prend un paramètre name via la query string.

- **Exemple de requête** :
http://localhost:3000/get_kitten?name=Whiskers

4. **Route** /update_entry

- **Méthode HTTP** : GET

- **Description** : Cette route met à jour un chat existant dans la base de données. Elle prend deux paramètres via la query string : name (nom actuel du chat) et updatename (nouveau nom à attribuer).

- **Exemple de requête** :
http://localhost:3000/update_entry?name=Whiskers&updatename=Fluffy

5. **Route** /delete_entry

- **Méthode HTTP** : GET

- **Description** : Cette route permet de supprimer une entrée dans la base de données MongoDB. Elle prend un paramètre name via la query string.

- **Exemple de requête** :
http://localhost:3000/delete_entry?name=Whiskers

## Connexion à MongoDB :
La connexion à la base de données MongoDB est effectuée via Mongoose, à l’adresse MongoDB Atlas. Voici le code utilisé pour établir cette connexion :
const uri = "mongodb+srv://sweetyamnesia:SCZ9Ur2hdTbHmFPP@cluster0.7gozl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
await mongoose.connect(uri);
console.log('Je suis connectée à la base de données');

## Exemples de requêtes et de réponses :
### Ajouter un chat :
- **Requête** : GET /create_entry?catname=Whiskers
- **Réponse** : Chat réceptionné


### Afficher tous les chats :
- **Requête** : GET /get_entries
- **Réponse (Exemple)** :
[
  { "_id": "60c72bdf4f1a2c3f4d7e2c3e", "name": "Whiskers", "__v": 0 },
  { "_id": "60c72bf14f1a2c3f4d7e2c3f", "name": "Fluffy", "__v": 0 }
]

### Mettre à jour le nom d’un chat :
- **Requête** : GET /update_entry?name=Whiskers&updatename=Fluffy
- **Réponse** : ok

### Supprimer un chat :
- **Requête** : GET /delete_entry?name=Whiskers
- **Réponse** : Entry deleted successfully

## Conclusion et apprentissages :
Ce projet m'a permis d'explorer l'utilisation de MongoDB avec Node.js et Express, ainsi que de mettre en œuvre des opérations CRUD basiques. Je me suis familiarisé avec l’utilisation de Mongoose pour interagir avec MongoDB, et j'ai appris à effectuer des requêtes de lecture, d'ajout, de mise à jour et de suppression.
