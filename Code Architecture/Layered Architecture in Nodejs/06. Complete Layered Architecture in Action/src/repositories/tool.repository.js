const Tool = require("../models/tool.model");
const BaseRepository = require("./base.repository");

class ToolRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }

  async findByName(toolName) {
    return await this.findOne({ name: toolName });
  }

  async findByCategory(category) {
    return await Tool.findByCategory(category);
  }

  async findPopular() {
    return await Tool.findPopular();
  }

  async search(searchQuery) {
    await Tool.findAll(
      {
        $: [
          { name: { $regex: searchQuery, $options: "i" } },
          { description: { $regex: searchQuery, $options: "i" } },
          { tags: { $in: [new RegExp(searchQuery, "i")] } },
        ],
      },
      { sort: { createdAt: -1 } },
    );
  }
} 

module.exports = ToolRepository; 
