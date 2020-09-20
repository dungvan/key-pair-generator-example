const express = require('express');
const router = express.Router();
const auth = require('http-auth');
const {handler} = require('../manager/handler');

const basic = auth.basic({
    realm: 'Login',
    file: '.htpasswd'
});

/* GET home page. */
router.get('/', basic.check(async function (req, res) {
      res.render('index');
}));

/* generate key */
router.post('/key', handler.GenKey);

module.exports = router;