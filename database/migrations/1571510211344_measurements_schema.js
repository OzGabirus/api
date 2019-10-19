"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MeasurementsSchema extends Schema {
  up() {
    this.create("measurements", table => {
      table.increments();
      table.float("value");
      table.timestamp("date");
      table.integer("type_id");
      table.integer("geo_id");
      table
        .foreign("type_id")
        .references("id")
        .inTable("measurements_types")
        .onDelete("cascade");
      table
        .foreign("geo_id")
        .references("id")
        .inTable("geolocations")
        .onDelete("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("measurements");
  }
}

module.exports = MeasurementsSchema;
