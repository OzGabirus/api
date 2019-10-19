"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class GeolocationSchema extends Schema {
  up() {
    this.create("geolocations", table => {
      table.increments();
      table.float("latitude");
      table.float("longitude");
      table.float("radius");
      table.timestamps();
    });
  }

  down() {
    this.drop("geolocations");
  }
}

module.exports = GeolocationSchema;
