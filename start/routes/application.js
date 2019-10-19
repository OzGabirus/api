const Route = use("Route");

Route.group(() => {
  Route.post("application", "ApplicationController");
})
  .prefix("v1")
  .namespace("Application");
