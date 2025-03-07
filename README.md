# MongoDB

## 📜 Description du projet
Ce projet est une application de gestion de "chats" stockés dans MongoDB. Il démontre l'utilisation de MongoDB avec Node.js via Mongoose, et permet de réaliser des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) sur les données.

## 🛠 Pile technologique
- **Node.js** : Backend
- **Express.js** : Framework web
- **MongoDB** : Base de données NoSQL
- **Mongoose** : Interaction avec MongoDB

## 🚀 Fonctionnalités
- **/create_entry** : Ajouter un chat 🐱
- **/get_entries** : Récupérer tous les chats 📋
- **/get_kitten** : Récupérer un chat spécifique 🐾
- **/update_entry** : Mettre à jour le nom d’un chat ✍️
- **/delete_entry** : Supprimer un chat ❌

## 🔗 Connexion à MongoDB
La connexion à la base de données MongoDB est réalisée via Mongoose avec MongoDB Atlas.

```javascript
const uri = "mongodb+srv://<user>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority";
await mongoose.connect(uri);
console.log('Je suis connectée à la base de données');
```
___

## 📚 Exemples de requêtes

- **Ajouter un chat** :  
  - **GET** `/create_entry?catname=Whiskers`  
  - **Réponse** : Chat réceptionné 🐱

- **Afficher tous les chats** :  
  - **GET** `/get_entries`  
  - **Réponse** : Liste de tous les chats 📋

- **Mettre à jour le nom d’un chat** :  
  - **GET** `/update_entry?name=Whiskers&updatename=Fluffy`  
  - **Réponse** : ok ✅

- **Supprimer un chat** :  
  - **GET** `/delete_entry?name=Whiskers`  
  - **Réponse** : Entry deleted successfully 💥

___

## 🧠 Conclusion

Ce projet m'a permis de comprendre les bases de MongoDB avec Node.js et Express, et de pratiquer les opérations CRUD avec Mongoose pour gérer des données dans une base NoSQL. 📈
