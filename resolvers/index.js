const { assignResolver } = require("../lib")
const queries = require('./queries')
const mutations = require('./mutations')

module.exports = {
  Query: assignResolver(queries),
  Mutation: assignResolver(mutations)
}
