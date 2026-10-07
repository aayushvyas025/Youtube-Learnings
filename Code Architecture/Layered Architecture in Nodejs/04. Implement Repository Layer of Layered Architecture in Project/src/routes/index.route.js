const express = require('express'); 
const toolboxRoutes = require('./toolbox.route'); 

const router = express.Router(); 

router.use('/toolbox', toolboxRoutes); 

module.exports = router;  