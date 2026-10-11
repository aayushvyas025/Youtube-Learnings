const constants = require("../constants/index.constant");

const { httpStatus, responseMessages } = constants;

class ApiResponse {
  static success(
    response,
    statusCode = httpStatus.OK,
    message = responseMessages.SUCCESS,
    meta = null,
    data = null,
  ) {
    const resObj = {
      success: true,
      message,
      ...(data !== null && { data }),
      ...(meta !== null && { ...meta }),
    };

    return response.status(statusCode).json(resObj);
  }

  static ok(
    response,
    data = null,
    message = responseMessages.SUCCESS,
    meta = null,
  ) {
    return this.success(response, httpStatus.OK, message, data, meta);
  }

  static created(response, data = null, message = responseMessages.CREATED) {
    return this.success(response, httpStatus.CREATED, data, message);
  }

  static noContent(response) {
    return response.status(httpStatus.NO_CONTENT).send();
  }

  static multiStatus(
    response,
    data = null,
    message = "Multi-status operation completed",
  ) {
    return this.success(response, httpStatus.MULTI_STATUS, data, message);
  }

  static paginated(
    response,
    data,
    page,
    limit,
    total,
    message = responseMessages.SUCCESS,
  ) {
    const meta = {
      count: data.length,
      page: parseInt(page),
      limit: parseInt(limit),
      total,
      totalPages: Math.ceil(total / limit),
    };

    return this.success(response, httpStatus.OK, message, data, meta);
  }

  static error(
    response,
    statusCode = httpStatus.INTERNAL_SERVER_ERROR,
    message = responseMessages.ERROR.INTERNAL,
    errors = null,
  ) {
    const response = {
      success: false,
      message,
      ...(errors !== null && { errors }),
    };

    return response.status(statusCode).json(response);
  }

  static badRequest(
    response,
    message = responseMessages.ERROR.BAD_REQUEST,
    errors = null,
  ) {
    return this.error(response, httpStatus.BAD_REQUEST, message, errors);
  }

  static notFound(
    response,
    message = responseMessages.ERROR.NOT_FOUND,
    errors = null,
  ) {
    return this.error(response, httpStatus.NOT_FOUND, message, errors);
  }
}

module.exports = ApiResponse; 
