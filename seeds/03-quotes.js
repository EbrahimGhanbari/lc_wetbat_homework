const fakeDataMaker = require("../utilities/fakeDataMaker");

exports.seed = async function (knex) {
  //get owner id for FK
  const owner_id = await knex
    .select("id")
    .from("staffs")
    .then((data) => data[0].id);

  //get owner id for FK
  const costumer_id = await knex
    .select("id")
    .from("costumers")
    .then((data) => data[0].id);

  const fakeData = [];
  const nimberOfRows = 50;

  for (let i = 0; i < nimberOfRows; i++) {
    const data = { ...fakeDataMaker().quotes, owner_id, costumer_id };
    fakeData.push(data);
  }

  await knex("quotes").then(function () {
    return knex("quotes").insert(fakeData);
  });
};
