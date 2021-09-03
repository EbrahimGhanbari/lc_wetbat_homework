const fakeDataMaker = require("../utilities/fakeDataMaker");

exports.seed = async function (knex) {
  const fakeData = [];
  const nimberOfRows = 10;
  for (let i = 0; i < nimberOfRows; i++) {
    fakeData.push(fakeDataMaker().staffs);
  }

  await knex("staffs").then(function () {
    return knex("staffs").insert(fakeData);
  });
};
