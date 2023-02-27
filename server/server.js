// Require express
const express = require('express');

const app = express();
// Heroku assigns us a unique PORT
// Use 5001 for localhost development
const port = process.env.PORT || 5001;

let quoteList = [
    { text: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { text: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { text: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];

//Allow req.body
//ignore references to body-parser
app.use(express.json());

// GET request returns information po ()
// localhost:5001/quotes
// /quotes is the route
app.get('/quotes', (req, res) => {
    console.log('GET Request made for /quotes');
    res.send(quoteList);
    // res.send(quoteList[Math.floor(Math.random() * quoteList.length)]);
    // Send back the list of quotes 
});

app.post('/quotes', (req, res) => {
    console.log('post request made for /quotes');
    console.log(req.body); //contains data sent from client
    let quoteToAdd = req.body;
    quoteList.push(quoteToAdd);
    console.log(quoteList)
    res.sendStatus(201); //means request was successful
})
// POST request saves user input
// PUT request updates information
// DELET request removes information

// Look here for files
app.use(express.static('server/public'));

// Listen for requests for files
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});