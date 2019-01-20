const jwt = require('jsonwebtoken');

/**
 * Chave de validação do JWT.
 */
const SECRET_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hdGV1cyIsImlhdCI6MTUzNjA3MTY1NX0.kxZOuln_eGqFnE5hSfa8AHWxhqxZsUqMWYU695SA3h8";

/**
 * Middleware que verifica a validade e decodifica o token de autenticação presente no header 'x-access-token'.
 * 
 * @param {request} request
 * @param {response} response
 * @param {next} next
 */
function authenticationMiddleware(request, response, next) {
    const token = request.headers["x-access-token"] || request.cookies["x-access-token"];
    try {
        const payload = jwt.verify(token, SECRET_KEY);
        request.usuarioLogado = payload;
        next();
    } catch (ex) {
        console.error('Não foi possível decodificar o token:', token, ex);
        response.status(401).send('Acesso não autorizado.');
    }
}

/**
 * Gera o token de autenticação para o usuário.
 * 
 * @param {object} payload objeto plano contendo os dados do usuário.
 * @return {string} Token de autenticação.
 */
function generateToken(payload) {
    delete payload.senha;
    const token = jwt.sign(payload, SECRET_KEY, { encoding: 'UTF8' });
    return token;
}

module.exports = {
    authenticationMiddleware,
    generateToken,
};