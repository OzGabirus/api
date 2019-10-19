const Route = use("Route");

Route.group(() => {
  Route.post("dataSet", "DataSetController");
})
  .prefix("v1")
  .namespace("DataSet");
