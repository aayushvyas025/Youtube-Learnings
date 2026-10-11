const router = require('express').Router(); 

router.get('/', (request, response) => {
    response.json({success: true, message:'tool api is working'})
})

module.exports = router; 