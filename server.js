const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const version = require('./environment');
const port = process.env.PORT || 5588;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Express HBS engine
app.set('view engine', 'hbs');

// const version = 'DEV_' + uuid.v4();
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

app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port} - ${version.version}`);
});