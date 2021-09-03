const faker = require("faker");

module.exports = createFakeData = () => ({
  staffs: {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    address: faker.address.cityName(),
  },
  costumers: {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    address: faker.address.cityName(),
  },
  quotes: {
    from: faker.address.cityName(),
    destination: faker.address.cityName(),
    departure_date: faker.date.future(),
    return_date: faker.date.future(),
    number_of_traveller: Math.floor(Math.random() * 10 + 1),
    price: faker.commerce.price(),
  },
});
