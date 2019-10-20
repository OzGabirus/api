"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SiteSchema extends Schema {
  up() {
    this.create("sites", table => {
      table.increments();
      table.string("name", 100);
      table.string("description", 254);
      table.integer("timezone");
      table.integer("geo_id");
      table
        .foreign("geo_id")
        .references("id")
        .inTable("geolocations")
        .onDelete("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("sites");
  }
}

module.exports = SiteSchema;
