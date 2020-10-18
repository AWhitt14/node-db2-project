const knex = require('knex')
const knexfile = require('../knexFile')

module.exports = knex(knexfile)