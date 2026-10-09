const ToolRepository = require("../repositories/tool.repository");

class ToolService {
  constructor() {
    this.toolRepository = new ToolRepository();
  }

  async findToolByName(name) {
    try {
      const tool = await this.toolRepository.findOne(name);
      if (!tool) {
        throw new Error(`Tool with this name ${name} is not exists`);
      }
      return tool;
    } catch (error) {
      console.error(`Error, while get tool name: ${error.message}`);
    }
  }
  /**
   *  createNewTool method creates new Tool
   * @param {*} data takes data params
   * @returns  newTool
   */
  async createNewTool(data) {
    try {
      const existingTool = await this.toolRepository.findByName(data.name);
      if (existingTool) {
        throw new Error(`Tool is already existed`);
      }
      const newTool = await this.toolRepository.create(data);

      return newTool;
    } catch (error) {
      console.log(`Error, while creating tool: ${error.message}`);
    }
  }

  async deleteTool(id) {
    if (!id) {
      throw new Error("invalid tool id");
    }
    try {
      const tool = await this.toolRepository.deleteById(id);

      if (!tool) {
        throw new Error(`Tool not found`);
      }
    } catch (error) {
      console.log(`Error, while deleting tool: ${error.message}`);
    }
  }

  async createBulkTools(toolsData) {
    const result = {
      created: [],
      failed: [],
      total: toolsData.length,
    };

    for (tool of toolsData) {
      try {
        const createdTool = await this.createNewTool(tool);
        result.created.push(createdTool);
      } catch (error) {
        console.log(`Error, while creating bulk-tools: ${error.message}`);
        result.failed.push({
          data: tool,
          error: error.message,
        });
      }
    }
    return result;
  }

  async deleteBulkTools(toolsData) {
    const result = {
      deleted: [],
      failed: [],
      total: toolsData.length,
    };

    for (tool of toolsData) {
      try {
        const deletedTool = await this.deleteById(toolsData._id);
        result.deleted.push(deletedTool);
      } catch (error) {
        console.log(`Error, while deleting bulk-tools: ${error.message}`);
        result.failed.push({
          data: tool,
          error: error.message,
        });
      }
    }
    return results;
  }

  async getAllTools(filters = {}, option = {}) {
    try {
      const tools = await this.toolRepository.findAll(filters, option);

      if (!tools) {
        throw new Error(`No tools found`);
      }

      return tools;
    } catch (error) {
      console.log(`Error, while fetching all tools: ${error.message}`);
    }
  }
}

module.exports = ToolService;
