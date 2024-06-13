const express = require('express');
const router = express.Router();

var prospectController = require("../controllers/prospectController")
// Rota raiz dentro do grupo /
router.get('/', function (req, res) {
    let errorMessage = '';
    let hasError = false;

    if (req.session.hasError) {
        errorMessage = req.session.errorMessage;
        hasError = req.session.hasError;

        delete req.session.hasError;
        delete req.session.errorMessage;

        console.log(errorMessage);
    }

    res.render('index', {
        hasError: hasError,
        errorMessage: errorMessage
    });
});

router.get('/calculadora', function (req, res) {
    let errorMessage = '';
    let hasError = false;

    res.render('calculadora.ejs');  
});

router.post("/prospect/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /speedUsuarios/cadastrar
    prospectController.cadastrar(req, res);
});


router.post('/')

module.exports = router;