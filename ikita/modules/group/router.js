var express = require('express');
var router = express.Router();
var _read = require('./ctl_groups.js');
var jwt = require('express-jwt');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// Search Groups
router.get('/searchId/:kitaid', _read.findGroupId);

// Search Group by ID
router.get('/searchGroupById/:groupid', _read.findGroupbyId);

// Group erstellen
router.post('/register', _read.registerGroup);



module.exports = router;