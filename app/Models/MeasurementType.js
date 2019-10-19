"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MeasurementType extends Model {
  measurement() {
    return this.hasOne("App/Model/Measurement");
  }
}

module.exports = MeasurementType;
