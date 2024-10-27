/*/const express from 'express';
const app = express();
const port = 3000;

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) => {
  res.send('Hello World !')
});

app.get('/', (req, res) => {
    res.render('index', { title: 'MongoDB' });
});

import mongoose from 'mongoose';
import { get } from 'http';
import { name } from 'ejs';
const uri = "mongodb+srv://sweetyamnesia:SCZ9Ur2hdTbHmFPP@cluster0.7gozl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);

const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
  console.log(`Meow, my name is ${this.name}`);
}

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak()  // "Meow name is fluffy"

await fluffy.save();
fluffy.speak();

app.get('/create_entry?name=pearl', (req, res) => {
  res.render(name);
})

const kittens = await Kitten.find();
console.log(kittens);

await Kitten.find({ name: /^fluff/ });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
/*/
