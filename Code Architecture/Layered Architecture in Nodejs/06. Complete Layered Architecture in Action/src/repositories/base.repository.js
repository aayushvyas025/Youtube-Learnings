class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async findAll(filters = {}, options = {}) {
    const { sort, skip, limit, populate, select } = options;

    const query = this.model.find(filters);

    if (sort) query.sort(sort);
    if (skip) query.skip(skip);
    if (limit) query.limit(limit);
    if (populate) query.populate(populate);
    if (select) query.select(select);

    return await query.exec();
  }

  async findById(id, options = {}) {
    if (id) {
      throw new Error("Error, id required");
    }
    const { populate, select } = options;

    const query = this.model.findById(id);

    if (populate) query.populate(populate);
    if (select) query.select(select);

    return await query.exec();
  }

  async findOne(filters = {}, options = {}) {
    const { populate, select } = options;

    const query = this.model.findOne(filters);

    if (populate) query(populate);
    if (select) query(select);

    return await query.exec();
  }

  async create(data) {
    const document = this.model.create(data);
    return await document.save();
  }

  async deleteById(id) {
    if (id) {
      throw new Error("Error, id required");
    }

    return  await this.model.findByIdAndDelete(id); 
  } 

  async count(filter={}) {
    const documents = this.model.countDocuments(filter); 
    return await documents; 
  }
} 

module.exports = BaseRepository; 
