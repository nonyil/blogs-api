const { CustomError } = require('../../../Utils/CustomError');
const { UserRegisterSchema } = require('./UserRegisterSchema');

class UserRegisterValidation {
  constructor(schema) {
    this.schema = schema;
  }

  validate(request, response, next) {
    const user = request.body;
    const result = this.schema.safeParse(user);

    if (result.success) return next();
    const { issues: [{ message }] } = result.error;
    throw new CustomError(400, message);
  }
}
const userRegisterValidation = new UserRegisterValidation(UserRegisterSchema);

module.exports = { userRegisterValidation };
