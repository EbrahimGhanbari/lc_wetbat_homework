// module.exports.up = async function (knex, Promise) {
//   await knex.schema.createTable("quotes", (table) => {
//     table.increments("id");
//     table
//       .integer("owner_id")
//       .unsigned()
//       .notNullable()
//       .references("id")
//       .inTable("staffs")
//       .onDelete("cascade");
//     table
//       .integer("costumer_id")
//       .unsigned()
//       .notNullable()
//       .references("id")
//       .inTable("costumers")
//       .onDelete("cascade");

//     // table.string("from", 255).notNullable();
//     // table.string("destination", 255).notNullable();
//     // table.timestamp("departure_date").notNullable();
//     // table.timestamp("return_date");
//     // table.integer("number_of_traveller").unsigned().notNullable();
//     // table.decimal("price").notNullable();
//     // table.string("quote_status").defaultTo("pending");
//     // table.timestamps(true, true);
//   });
// };

module.exports.up = async function (knex) {
  const transaction = await knex.transaction();

  try {
    await transaction.schema.alterTable("quotes", (table) => {
      table
        .integer("owner_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("staffs")
        .onDelete("cascade");
      table
        .integer("costumer_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("costumers")
        .onDelete("cascade");
    });

    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
  }
};

module.exports.down = async function (knex) {
  const transaction = await knex.transaction();

  try {
    await transaction.schema.alterTable("quotes", (table) => {
      table
        .integer("owner_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("staffs");
      table
        .integer("costumer_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("costumers");
    });

    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
  }
};
