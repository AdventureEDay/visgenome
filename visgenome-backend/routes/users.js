var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.post('/', function(req, res, next) {
//   res.send('respond with a resource');
//   console.log(req.body);
// });
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  // console.log(req.body);
});
module.exports = router;
