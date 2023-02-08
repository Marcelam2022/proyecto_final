const express = require('express');
const router = express.Router();

const libros =[
    {id:1, titulo: 'Las aventuras de Tom Sawyer' , autor: 'Mark Twain' },
    {id:2, titulo: 'Recuerdos de la infancia' , autor: 'Francisco Pemar'},
    {id:3, titulo: 'Caza Mayor' , autor: 'Elvira Jardon' },
];

router.get('/api/libros', (req, res) =>{
    res.json(libros);
    

});


module.exports = router;
