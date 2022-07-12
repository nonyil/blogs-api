const { UserRegisterService } = require('../services/UserRegister.service');

async function UserRegisterController(request, response) {
  const token = await UserRegisterService(request.body);
  return response.status(201).json({ token });
}

module.exports = { UserRegisterController };