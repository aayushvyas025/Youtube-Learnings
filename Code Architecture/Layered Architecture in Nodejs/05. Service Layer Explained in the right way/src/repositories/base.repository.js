class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async findAll(filter = {}, options = {}) {
    const { sort, skip, limit, populate, select } = options;

    let query = this.model.find(filter);

    if (sort) query.sort(sort);
    if (skip) query.skip(skip);
    if (limit) query.limit(limit);
    if (populate) query.populate(populate);
    if (select) query.select(select);

    return await query.exec();
  }

  async findById(id, options = {}) {
    const { select, populate } = options;

    let query = this.model.findById(id);

    if (select) query.select(select);
    if (populate) query.populate(populate);

    return await query.exec();
  }

  async findOne(filters, options = {}) {
    const { populate, select } = options;

    let query = this.model.findOne(filters);

    if (populate) query.populate(populate);
    if (select) query.select(select);

    return await query.exec();
  }

  async create(data) {
    let document = this.model.create(data);
    return await document.save();
  }

  async updateById(id, updatedData, options = {}) {
    const defaultOptions = {
      new: true,
      runValidators: true,
      ...options,
    };

    return await this.model.updateById(
      id,
      { ...updatedData, updatedAt: Date.now() },
      defaultOptions,
    );
  }

  async deleteById(id) {
    return await this.model.deleteById(id);
  }

  async count(filter = {}) {
    return await this.model.countDocuments(filter);
  }
}

module.exports = BaseRepository;
