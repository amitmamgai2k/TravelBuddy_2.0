class ApiResponse {
  constructor(statusCode, data, message = "Success", metadata = null) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode >= 200 && statusCode < 400;
    this.metadata = metadata;
  }

  toJSON() {
    const response = {
      success: this.success,
      statusCode: this.statusCode,
      message: this.message,
      data: this.data,
    };

    // Only include metadata if provided
    if (this.metadata) {
      response.metadata = this.metadata;
    }

    return response;
  }
}

export default ApiResponse;
