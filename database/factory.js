"use strict";

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

Factory.blueprint("App/Models/Geolocation", (faker, i, data) => {
  return {
    latitude: data.lat ? data.lat : faker.floating({ min: 0, max: 90 }),
    longitude: data.long ? data.long : faker.floating({ min: 0, max: 180 }),
    radius: 30
  };
});

Factory.blueprint("App/Models/Site", (faker, i, data) => {
  return {
    name: data.name ? data.name : faker.country(),
    description: faker.sentence(),
    timezone: 800
  };
});

Factory.blueprint("App/Models/Measurement", async (faker, i, data) => {
  return {
    value: data.value,
    date: data.date,
    type_id: data.type_id,
    geo_id: data.geo_id
  };
});
