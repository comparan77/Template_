var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ventas', { title: 'Ventas' });
});

/* Test. */
router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Test', option: 'Mensaje' });
});

/* Test. */
router.get('/ventas', function(req, res, next) {
  res.render('ventas', { title: 'Ventas', option: 'ventas', needTbl: true });
});

/* Test. */
router.get('/refacciones', function(req, res, next) {
  res.render('refacciones', { title: 'Refacciones y Accesorios', option: 'refacciones' });
});

/* Test. */
router.get('/servicios', function(req, res, next) {
  res.render('servicios', { title: 'Servicios', option: 'servicios' });
});

module.exports = router;
