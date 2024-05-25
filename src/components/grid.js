import "@progress/kendo-theme-material/dist/all.css";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { bikeStations } from "./data/bike-stations";
import { useState } from "react";
import { process } from "@progress/kendo-data-query";

const BooleanCell = (props) => {
  return <td>{props.dataItem[props.field] ? "✔️" : "❌"}</td>;
};
