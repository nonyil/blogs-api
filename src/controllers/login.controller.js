const { loginService } = require('../services/login.service');

async function loginController(request, response) {
    const { email, password } = request.body;
    const token = await loginService(email, password);
    return response.status(200).json({ token });
}

module.exports = { loginController };