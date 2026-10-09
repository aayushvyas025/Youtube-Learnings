const router = require('express').Router(); 
const toolboxRoutes = require('./toolbox.route'); 

router.use('/tool', toolboxRoutes); 

module.exports = router; 