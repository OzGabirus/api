"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Site extends Model {
  geolocation() {
    return this.belongsTo("App/Model/Geolocation");
  }
}

module.exports = Site;
