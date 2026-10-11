const router = require("express").Router();
const ToolController = require("../controllers/tool.controller");

const toolController = new ToolController();

router.get("/", toolController.getAllTools);
router.get("/tool/name", toolController.getToolByName);
router.post("/tool/create", toolController.createTools);

module.exports = router;
