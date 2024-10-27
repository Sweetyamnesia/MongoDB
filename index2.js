const express =  require('express');
const app = express();
const port = 3000;

const  mongoose = require('mongoose');

const uri = "mongodb+srv://sweetyamnesia:SCZ9Ur2hdTbHmFPP@cluster0.7gozl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const kittySchema = new mongoose.Schema({
    name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);

app.get('/', (req, res) => {
    res.send('Hello World !')
});

app.get('/create_entry', async (req, res) => {
    const catName = req.query.catname;
    console.log(catName)
    if (catName) {
        const newCat = new Kitten({ name: catName });
        await newCat.save();
        return res.send('Chat réceptionné');
    }
    res.send('Need cat name');
});

app.get('/get_entries', async (req, res) => {
    const newKittens = await Kitten.find();
    console.log(newKittens);
    res.json(newKittens);
});

app.get('/get_kitten', async (req, res) => {
    const name = req.query.name;
    console.log(name);
    if(name) {
        const newName = await Kitten.find({name : name});
        console.log(newName);
        return res.json(newName);
    }
    res.send("Nous n'avons pas filtré le nom du chat");
});

app.get('/update_entry', async (req, res) => {
    try {
    const name = req.query.name;
    const updateName = req.query.updatename;
    if (name && updateName) {
        const filter = {name : name};
        const update = {name : updateName};
        await Kitten.findOneAndUpdate(filter, update);
        return res.send("ok");
    }
    res.send('Please provide a cat name and a new name');
    } catch(error) {
        console.error(error);
        res.status(500).send('An error occured while updating the entry');
    }
});

app.get('/delete_entry', async (req, res) => {
    try {
    const name = req.query.name;
    if (name) {
        const deletedName = await Kitten.deleteOne({ name: name});
        return res.send("Entry deleted successfully");
    }
    res.send('Please provide a cat name');
    } catch(error) {
        console.error(error);
        res.status(500).send('An error occured while updating the entry');
    }
});

app.listen(port, async () => {
    console.log(`Server is running on http://localhost:${port}`);
    await mongoose.connect(uri);
    console.log('Je suis connectée à la base de données');
}); 

