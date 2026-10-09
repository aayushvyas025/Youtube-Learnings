const router = require('express').Router(); 

router.get('/', (request, response) => {
    response.json({success: true, message:"toolbox api work successfully"}); 
})


module.exports = router