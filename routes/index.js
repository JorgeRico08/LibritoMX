var express = require('express');
var router = express.Router();

/* Funcionalidades dentro de la app */
/* GET */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Book Rental', pag: 'Home' });
});

router.get('/novedades', function(req, res, next) {
  res.render('novedades', { title: 'Book Rental', pag: 'Novedades' });
});

router.get('/delmes', function(req, res, next) {
  res.render('libroMes', { title: 'Libro del mes', pag: 'Libro del mes' });
});

router.get('/accesorios', function(req, res, next) {
  res.render('accesorios', { title: 'Book Rental', pag: 'Accesorios' });
});

router.get('/error', function(req, res, next) {
  res.render('error');
});

/* LOGIN y RUTAS EXTERNAS */
router.get('/', function(req, res, next) {
  res.render('login-Register', {title: "Book Rental"});
});

router.get('/recuperarC', function(req, res, next) {
  res.render('RContraceña', {title: "Recuperar mi contraceña"});
});


module.exports = router;
