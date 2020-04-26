const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

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
    console.log('Escuchando por el puerto 5588');
});