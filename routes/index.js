var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var xyz = "bhale"

  res.render('shop/index', { name: 'Pranav' });
});

module.exports = router;
