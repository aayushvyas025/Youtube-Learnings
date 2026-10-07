const express =  require('express'); 

const router = express.Router(); 

router.get('/', (request, response) => {
    response.json({success: true, message:"Toolbox api is working"})
})


module.exports = router;  

