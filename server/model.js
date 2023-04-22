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

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required:true},
    email:{type: String, required: true, unique: true},
    currentSprite: String,
    winCount: {type:Number, default:0},
    picture:String
})

const sessionSchema = new mongoose.Schema({
    ssid:{type: String, required:true},
    createdAt: { type: Date, expires: 86400, default: Date.now }
})

const User = mongoose.model('user', userSchema);
const Session = mongoose.model('session', sessionSchema);

module.exports = {User, Session};
