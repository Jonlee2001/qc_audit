var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('audit', { title: 'Audit List' });
});
router.get('/:audit_id', function(req,res,next){
  var jsonData = JSON.parse(fs.readFileSync(__dirname +'/../data/' + req.params.audit_id + '.json'));
  //res.json(JSON.parse(data));
  res.render('partials/questionnaire', {data: jsonData});
});

module.exports = router;
