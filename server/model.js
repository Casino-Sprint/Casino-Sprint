const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://theGang:expressjs@axolotlgang.byqepto.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'yoshi_racers_database'
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

const userModel = new mongoose.Schema({
    firstName: {type: String, required: true}
})

const User = mongoose.model('user', userModel);

module.exports = User;
