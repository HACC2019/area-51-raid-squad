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