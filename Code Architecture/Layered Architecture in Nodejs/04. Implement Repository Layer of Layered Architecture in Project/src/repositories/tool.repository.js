const BaseRepository = require("./base.repository");
const Tool = require("../models/tools.model");

class ToolRepository extends BaseRepository {
  constructor() {
    super(Tool);
  }

  async findByName(name) {
    return this.findOne({ name });
  }

  async findByCategory(category) {
    return await Tool.findByCategory(category);
  }

  async findPopular() {
    return await Tool.findByPopular();
  }

  async search(searchQuery) {
    return await Tool.findAll(
      {
        $or: [
          { name: { $regex: searchQuery, $options: "i" } },
          { description: { $regex: searchQuery, $options: "i" } },
          { tags: { $in: [new RegExp(searchQuery, "i")] } },
        ],
      },
      { sort: { createdAt: -1 } },
    );
  }
}
