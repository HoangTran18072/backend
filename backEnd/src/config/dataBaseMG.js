const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tranhuuhoang692:Ua5EDLtiUk2s47z4@cluster0.umnysam.mongodb.net/');



const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});
