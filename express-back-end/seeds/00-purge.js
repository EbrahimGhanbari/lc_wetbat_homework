exports.seed = async function (knex) {
  await knex("quotes").del();
  await knex("staffs").del();
  await knex("costumers").del();
};
