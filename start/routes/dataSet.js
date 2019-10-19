const Route = use("Route");

Route.group(() => {
  Route.post("dataSet", "DataSetController");
  Route.post("geolocation", "GeolocationController.store");
}).prefix("api/v1");
