const { CustomError } = require('../Utils/CustomError');

class GeneralError {
  contructor(defaultStatus = 500) { this.defaultStatus = defaultStatus; }

  handle(error, request, response, _next) {
    if (error instanceof CustomError) {
      return response.status(error.status).json({ message: error.message });
    }
   return response.status(this.defaultStatus).json({ messsage: 'please verify'
   + ' your code, im tired' });
  }
}

const generalError = new GeneralError();

module.exports = generalError;