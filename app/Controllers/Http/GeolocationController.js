"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Geolocation = use("App/Models/Geolocation");

/**
 * Resourceful controller for interacting with geolocations
 */
class GeolocationController {
  /**
   * Show a list of all geolocations.
   * GET geolocations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {}

  /**
   * Create/save a new geolocation.
   * POST geolocations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const { latitude, longitude, radius } = request.all();
      console.log(latitude);
      console.log(longitude);
      console.log(radius);

      var geolocation = await Geolocation.create({
        latitude,
        longitude,
        radius
      });
      return response.status(201).send(geolocation);
    } catch (error) {
      return response.status(400).send({
        message: "Erro a processar a sua solicitação",
        error: error.message
      });
    }
  }

  /**
   * Display a single geolocation.
   * GET geolocations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Update geolocation details.
   * PUT or PATCH geolocations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a geolocation with id.
   * DELETE geolocations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = GeolocationController;
