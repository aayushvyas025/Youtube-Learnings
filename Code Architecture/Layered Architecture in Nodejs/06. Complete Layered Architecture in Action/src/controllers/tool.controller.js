const ToolService = require("../services/tool.service");

class ToolController {
  constructor() {
    this.toolService = new ToolService();
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

      return response.status(200).json({
        success: true,
        message: "Fetch all tools successfully",
        data: tools,
      });
    } catch (error) {
      console.error(`Error to fetch all tools: ${error.message}`);
      return response
        .status(500)
        .json({ success: false, message: `Internal Server Error` });
    }
  }

  async createTools(request, response) {
    try {
      const { name, description, isPopular, category, url, tags } =
        request.body;

      const newTool = await this.toolService.createNewTool({
        name,
        description,
        isPopular,
        category,
        url,
        tags,
      });

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
    }
  }
}
