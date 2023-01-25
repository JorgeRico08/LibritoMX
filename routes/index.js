var express = require('express');
var router = express.Router();

/* Funcionalidades dentro de la app */
/* GET */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Bienvenido a Libritos MX', pag: 'Home' });
});

router.get('/novedades', function(req, res, next) {
  res.render('novedades', { title: 'Novedades de Libritos MX', pag: 'Novedades' });
});

router.get('/error', function(req, res, next) {
  res.render('error');
});



/* LOGIN y RUTAS EXTERNAS */
router.get('/', function(req, res, next) {
  res.render('login-Register', {title: "Librito MX"});
});

router.get('/recuperarC', function(req, res, next) {
  res.render('RContraceña', {title: "Recuperar mi contraceña"});
});


module.exports = router;
