import React from 'react';
import './App.css';

function App() {
  return (
    <div class="embed-container">
      <iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="HACC19_A51RS" src="//bmcfeeley.maps.arcgis.com/apps/Embed/index.html?webmap=536079264d0b4d25a513cd09daf15f38&extent=-158.619,21.0924,-157.2629,21.8508&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"></iframe>
    </div>
  );
}

export default App; 

// testparse using es6
//import CSVToJSON from "csvtojson";
//import { parse as JSONToCSV } from "json2csv";

//reference file system to load 
//import fSystem from 'fs';

const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const fSystem = require("fs");

CSVToJSON().fromFile("./Data_HACC.csv").then(Data_HACC => {
  console.log(Data_HACC);
  Data_HACC.push({
    "Charge Station Name": "A",
    "Session Initiated By": "DEVICE",
    "Start Time": "09-01-18 07:25:03",
    "End Time": "09-01-18 07:53:32",
    "Duration": "00:28:29",
    "Energy(kWh)": "8.84",
    "Session Amount": "$4.77",
    "Session Id": "3168811",
    "Port Type": "CHADEMO",
    "Payment Mode": "RFID",
  });
  const csv = JSONToCSV(Data_HACC, {fields: ["Charge Station Name", "Session Initiated By", "Start Time", "End Time", "Duration", "Energy(kWh)", "Sessoion Amount", "Session Id", "Port Type", "Payment Mode"]});
  fSystem.writeFileSync("./TestParse.csv", csv);
});