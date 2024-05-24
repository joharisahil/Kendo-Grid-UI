import "@progress/kendo-theme-material/dist/all.css";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { bikeStations } from "./data/bike-stations";
import { useState } from "react";
import { process } from "@progress/kendo-data-query";

const BooleanCell = (props) => {
  return <td>{props.dataItem[props.field] ? "✔️" : "❌"}</td>;
};

function App() {
  const [result, setResult] = useState(bikeStations);
  const [dataState, setDataState] = useState();
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(10);

  const onPageChange = (event) => {
    setSkip(event.page.skip);
    setTake(event.page.take);
  };

  const onDataStateChange = (event) => {
    setDataState(event.dataState);
    setResult(process(bikeStations, event.dataState));
  };

  return (
    <Grid
      style={{
        height: "800px",
      }}
      //  data={result.slice(skip, skip + take)} used for slicing the grid UI
      data={result}
      pageable={true}
      skip={skip}
      take={take}
      onPageChange={onPageChange}
      total={bikeStations.length}
      filterable={true}
      onDataStateChange={onDataStateChange}
      {...dataState}
    >
      <Column field="station_id" title="ID" />
      <Column field="num_bikes_available" title="Bikes Available" />
      <Column field="num_bikes_disabled" title="Bikes Disabled" />
      <Column field="num_docks_available" title="Docks Available" />
      <Column
        field="is_charging_station"
        title="Charging Station"
        cell={BooleanCell}
      />
      <Column field="zone" title="Zone" />
    </Grid>
  );
}

export default App;
