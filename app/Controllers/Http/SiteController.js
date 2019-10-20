"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Site = use("App/Models/Site");
const Database = use("Database");

/**
 * Resourceful controller for interacting with sites
 */
class SiteController {
  /**
   * Show a list of all sites.
   * GET sites
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    var sites = await Database.table("sites").orderBy("name");
    return response.send(sites);
  }

  /**
   * Create/save a new site.
   * POST sites
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const { name, description, timezone, geo_id } = request.all();

      var site = await Site.create({
        name,
        description,
        timezone,
        geo_id
      });
      return response.status(201).send(site);
    } catch (error) {
      return response.status(400).send({
        message: "Erro a processar a sua solicitação",
        error: error.message
      });
    }
  }

  /**
   * Display a single site.
   * GET sites/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Update site details.
   * PUT or PATCH sites/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a site with id.
   * DELETE sites/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = SiteController;
