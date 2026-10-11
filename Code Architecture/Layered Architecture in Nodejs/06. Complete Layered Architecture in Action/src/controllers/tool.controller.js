const ToolService = require("../services/tool.service");
const ApiResponse = require("../utils/apiResponse.util");
const constants = require("../constants/index.constant");

const { responseMessages } = constants;

class ToolController {
  constructor(toolService) {
    // this.toolService = new ToolService(); 
    //! When we instantiate ToolService which means this controller depends on ToolService that means higher module depends to lower modules so it's doesn't follow the Solid D 'DIP' principle   

    // Correct logic for DIP : 
    this.toolService = toolService // Now this is not depend on Service Layer  
  }

  async getAllTools(request, response) {
    try {
      const { category, sort, popular, skip, limit, search } = request.query;

      // filtering
      const filters = {};
      if (category) filters.category = category;
      if (typeof popular === "true") filters.isPopular = true;

      // options
      const options = {};
      if (limit) options.limit = parseInt(limit);
      if (skip) options.sort = parseInt(skip);
      if (sort) options.sort = sort === "asc" ? 1 : -1;

      let tools;
      if (search) {
        tools = await this.toolService.findToolByName(search);
      } else {
        tools = await this.toolService.getAllTools(filters, options);
      }

      return ApiResponse.ok(response, tools, responseMessages.FETCHED, {
        count: tools.length,
      });
    } catch (error) {
      console.error(`Error to fetch all tools: ${error.message}`);
      return ApiResponse.error(
        response,
        responseMessages.ERROR.INTERNAL,
        error,
      );
    }
  }

  async createTools(request, response) {
    try {
      const toolData = request.body;

      const newTool = await this.toolService.createNewTool(toolData);

      return response.status(201).json({
        success: true,
        message: "New tool created successfully",
        data: newTool,
      });
    } catch {
      console.error(`Error, while creating new tools: ${error.message}`);
      return response
        .status(500)
        .json({ success: false, message: `Internal Server Error` });
    }
  }

  async getToolByName(request, response) {
    try {
      const { name } = request.body;

      if (!name) {
        return response
          .status(401)
          .json({ success: false, message: "Error, name required" });
      }

      const toolById = await this.toolService.findToolByName(name);
      return (
        response.status(200),
        json({
          success: true,
          message: `Fetch tool by name successfully`,
          data: toolById,
        })
      );
    } catch (error) {
      console.error(`Error, while fetching tool by name: ${error.message}`);
      return response
        .status(500)
        .json({ success: false, message: `Internal Server Error` });
    }
  }
}

module.exports = ToolController;
