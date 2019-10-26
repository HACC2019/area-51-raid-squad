// Parsed HACC Data

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
  fSystem.writeFileSync("./Data_Parse.csv", csv);
}); 

// parsed siteA

const csv2json = require("csvtojson");
const json2csv = require("json2csv").parse;
const fs = require("fs");

csv2json().fromFile("./SiteA_Power.csv").then(SiteA_Power => {
    console.log(SiteA_Power);
    const csv2 = json2csv(SiteA_Power, {Fields: ["Start Date and Time", "Power (kW)", "", "1-minute kWh", "total kWh"]});
    fs.writeFileSync("./SiteA_Parsed", csv2);
});