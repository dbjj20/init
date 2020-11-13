const micro = require('micro')
const dotenv = require('dotenv')
const appPort = process.env.APP_PORT || 5001
const routes = require('./routes')
dotenv.config();

module.exports = routes
