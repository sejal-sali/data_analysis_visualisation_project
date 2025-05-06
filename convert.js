const csv = require("csvtojson");
const fs = require("fs");

csv()
  .fromFile("./Final_Happiness_Index_Data_Processed.csv")
  .then((jsonObj) => {
    fs.writeFileSync("./data/data.json", JSON.stringify(jsonObj, null, 2));
    console.log("CSV converted to JSON!");
  });
