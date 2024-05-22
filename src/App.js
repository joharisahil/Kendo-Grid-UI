import "@progress/kendo-theme-material/dist/all.css";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { bikeStations } from "./data/bike-stations";

function App() {
  return (
    <Grid
      style={{
        height: "800px",
      }}
      data={bikeStations}
    >
      <Column field="station_id" title="ID" />
      <Column field="num_bikes_available" title="Bikes Available" />
      <Column field="num_bikes_disabled" title="Bikes Disabled" />
      <Column field="num_docs_available" title="Docks Available" />
      <Column field="is_charging_station" title="Charging Station" />
      <Column field="zone" title="Zone" />
    </Grid>
  );
}

export default App;
