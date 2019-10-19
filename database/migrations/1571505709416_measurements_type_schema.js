"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MeasurementsTypeSchema extends Schema {
  up() {
    this.create("measurements_types", table => {
      table.increments();
      table.string("tag", 100);
      table.timestamps();
    });
  }

  down() {
    this.drop("measurements_types");
  }
}

module.exports = MeasurementsTypeSchema;
