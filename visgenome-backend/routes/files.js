var express = require('express');
var router = express.Router();

/* assembly数据文件 */
router.get('/:genome/:name', function(req, res, next) {
  let options = {
      root: __dirname + "/../public/files/assembly/" + req.params.genome + "/",
      dotfiles: "deny",
      headers: {
        'x-timestamp':Date.now(),
        'x-sent':true
      }
  }
  let fileName = req.params.name;
  res.sendFile(fileName, options, function(err){
      if(err){
          console.log(err);
          res.status(err.status).end();
      }else{
          console.log("Sent:", fileName);
      }
  })
});

/* tracks数据文件*/
router.get('/:genome/tracks/:valuetype/:ktype/:name', function(req, res, next) {
  let options = {
      root: __dirname + "/../public/files/tracks/" + req.params.genome + "/" + req.params.valuetype + "/" + req.params.ktype + "/",
      dotfiles: "deny",
      headers: {
        'x-timestamp':Date.now(),
        'x-sent':true
      }
  }
  let fileName = req.params.name;
  res.sendFile(fileName, options, function(err){
      if(err){
          console.log(err);
          res.status(err.status).end();
      }else{
          console.log("Sent:", fileName);
      }
  })
});
module.exports = router;
