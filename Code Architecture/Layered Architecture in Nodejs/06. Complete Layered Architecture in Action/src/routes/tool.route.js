const router = require("express").Router();
const ToolController = require("../controllers/tool.controller");
const ToolService = require('../services/tool.service'); 
const ToolRepository = require('../repositories/tool.repository'); 

const toolRepository = new ToolRepository(); 
const toolService = new ToolService(toolRepository); 
const toolController = new ToolController(toolService);

router.get("/", toolController.getAllTools);
router.get("/tool/name", toolController.getToolByName);
router.post("/tool/create", toolController.createTools);

module.exports = router;
