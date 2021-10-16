const router = require('express').Router();
const homeRoutes = require('./homeRoutes.js')
router.use('/', homeRoutes);
//This page is fairly useless for now, to be used in further site upgrades
module.exports = router