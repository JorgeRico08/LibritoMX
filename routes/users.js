var express = require('express');
var router = express.Router();

/* LOGIN y RUTAS EXTERNAS */
router.get('/', function(req, res, next) {
  res.render('login-Register', {title: "Librito MX"});
});

router.get('/RecuperarContraceña', function(req, res, next) {
  res.render('RContraceña', {title: "Librito MX"});
});


module.exports = router;
