const router = require('express').Router(); 
const toolRoutes = require('./tool.route'); 

router.use('/tools', toolRoutes); 

module.exports = router; 

