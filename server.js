const express = require('express');
const app = express();

const hbs = require('hbs');
const uuid = require('uuid');

require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Express HBS engine
app.set('view engine', 'hbs');

const version = 'DEV_' + uuid.v4();
const data = {
    languages: 'HTML | Node | Javascript | HBS',
};



app.get('/', (req, res) => {
    res.render('home', data);
});

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'esTeban saLazar'
    });
});


// app.get('/', (req, res) => {
//     let salida = {
//         name: 'Esteban',
//         task: 'Learning Node',
//         url: req.url
//     };
//     res.send(salida);
//     // res.send('Hello World');
// });

// app.get('/data', (req, res) => {
//     res.send('Hello Data');
// });

app.listen(5588, () => {
    console.log('Escuchando por el puerto 5588 - ' + version);
});