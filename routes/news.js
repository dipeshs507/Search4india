var express = require('express');
var router = express.Router();

const {
    syncRoute,
     listRoute,
     SearchRoute,
    // deleteRoute,
  } = require("../controller/newsController");

router.post('/sync', syncRoute);
router.post('/list/:category', listRoute); 
router.get('/search', SearchRoute);
// router.post('/delete', deleteRoute);

module.exports = router;


