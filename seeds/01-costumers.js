const fakeDataMaker = require("../utilities/fakeDataMaker");

exports.seed = async function (knex) {
  const fakeData = [];
  const nimberOfRows = 10;
  for (let i = 0; i < nimberOfRows; i++) {
    fakeData.push(fakeDataMaker().costumers);
  }

  await knex("costumers").then(function () {
    return knex("costumers").insert(fakeData);
  });
};
