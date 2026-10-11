require('dotenv').config(); 

const config = {
  port:process.env.PORT || 3001, 
  cors: {
    origin:process.env.CORS_ORIGIN, 
    credentials:true, 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
  },
  api: {
    prefix:'/api', 
    version:'v1'
  }, 
  mongodb: {
    uri:process.env.MONGODB_URI
  }
} 

module.exports = config; 