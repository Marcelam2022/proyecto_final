const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');

const app = express();

app.use(
    bodyParser.urlencoded ({
        extended:true,
    })

    );




app.use(bodyParser.json());

app.use(cors());

app.use('/', apiRouter);

app.listen(3000, function(){
    console.log('servidor funcionando en el puerto 3000');
});

const crearLibro= (libro) => {
    return `
    <div class="libro" id="${libro.id}">
    <span class="titulo">${libro.titulo}</span>
    <span class="autor">${libro.autor}</span>
     </div>`;

};
     

        

