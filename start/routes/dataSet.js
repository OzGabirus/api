const Route = use("Route");

Route.group(() => {
  Route.post("dataSet", "DataSetController");
  Route.post("geolocation", "GeolocationController.store");
  Route.get("geolocation", "GeolocationController.index");

  Route.get("site", "SiteController.index");
  Route.post("site", "SiteController.store");

  Route.get("measurement/create", "MeasurementController.create");
  Route.get("measurement", "MeasurementController.index");
}).prefix("api/v1");
