
exports.up = async function(knex) {
  await knex.schema.createTable("cars",(table) => {
      table.increments("id")
      table.text("vin").unique().notNull()
      table.text("make").notNull()
      table.text("model").notNull()
      table.integer("mileage").notNull()
      table.text("transmissionStatus")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};
