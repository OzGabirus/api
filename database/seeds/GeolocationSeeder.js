"use strict";

/*
|--------------------------------------------------------------------------
| GeolocationSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class GeolocationSeeder {
  async run() {
    const datas = [
      {
        lat: 34.136475,
        long: -117.923965
      },
      {
        lat: 34.1439,
        long: -117.8508
      },
      {
        lat: 34.0506,
        long: -118.4553
      },
      {
        lat: 34.06643,
        long: -118.22675
      },
      {
        lat: 34.1992,
        long: -118.5331
      },
      {
        lat: 33.9014,
        long: -118.205
      },
      {
        lat: 34.0667,
        long: -117.7506
      },
      {
        lat: 34.13263,
        long: -118.127144
      },
      {
        lat: 33.79222,
        long: -118.17528
      },
      {
        lat: 33.802418,
        long: -118.21993
      },
      {
        lat: 33.95507,
        long: -118.43046
      },
      {
        lat: 34.3833,
        long: -118.5283
      },
      {
        lat: 34.66959,
        long: -118.13069
      },
      {
        lat: 33.830585,
        long: -117.93851
      },
      {
        lat: 33.62999,
        long: -117.67587
      },
      {
        lat: 33.92506,
        long: -117.95258
      },
      {
        lat: 34.0669,
        long: -118.2417
      },
      {
        lat: 33.9258,
        long: -117.9506
      },
      {
        lat: 33.6744,
        long: -117.9294
      },
      {
        lat: 33.82,
        long: -117.9131
      },
      {
        lat: 34.1356,
        long: -117.9228
      },
      {
        lat: 34.0131,
        long: -118.0592
      },
      {
        lat: 34.0833,
        long: -118.1081
      },
      {
        lat: 33.6125,
        long: -117.6517
      },
      {
        lat: 33.8022,
        long: -118.3667
      },
      {
        lat: 33.9517,
        long: -118.4389
      },
      {
        lat: 33.67454,
        long: -117.92559
      },
      {
        lat: 34.051098,
        long: -118.45638
      }
    ];
    await Promise.all(
      datas.map(async data => {
        const site = await Factory.model("App/Models/Site").create({
          name: "Los Angeles"
        });
        const geo = await Factory.model("App/Models/Geolocation").create({
          lat: data.lat,
          long: data.long
        });
        site.geo_id = geo.id;
        await site.save();
      })
    );

    // const sites = await Factory.model("App/Models/Site").createMany(100);
    // await Promise.all(
    //   sites.map(async site => {
    //     const geos = await Factory.model("App/Models/Geolocation").create();
    //     site.geo_id = geos.id;
    //     await site.save();
    //   })
    // );
  }
}

module.exports = GeolocationSeeder;
