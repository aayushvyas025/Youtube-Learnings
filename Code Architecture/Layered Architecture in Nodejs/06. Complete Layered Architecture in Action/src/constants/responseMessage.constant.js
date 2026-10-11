
const responseMessages = Object.freeze({
    // Success Messages 
    SUCCESS:'Operation completed successfully', 
    CREATED:'Resource created successfully', 
    UPDATED:'Resource updated successfully', 
    DELETED:'Resource deleted successfully', 
    FETCHED:'Resource fetched successfully', 

    // Tool Specific Messages 
    TOOL: {
        CREATED:'Tool created successfully',
        UPDATED:'Tool updated successfully',
        DELETED:'Tool deleted successfully', 

    }, 

    // Error messages 
    ERROR: {
        INTERNAL:'Internal Server Error',
        BAD_REQUEST:'Bad request', 
        UNAUTHORIZED:'Unauthorized Access',
        NOT_FOUND:'Not Found',
        INVALID_ID:'Invalid Id',
        INVALID_INPUT:'Invalid Input'
    }
}) 


module.exports = responseMessages; 