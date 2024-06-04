const { parse } = require("csv-parse");
const fs = require("fs");
const util = require("util")

const processFile = async () => {
  let index = 1000
  const records = [];
  const parser = fs
    .createReadStream("src/_data/vehicles_data.csv")
    .pipe(parse({
      header: true,
      columns: true,
      skip_empty_lines: true,
    }));
  for await (const record of parser) {
    // Work with each record
    index += 1
    record.index = index
    records.push(record);
  }
  return records;
};

module.exports = async function() {
  const data = await processFile();
  // console.log(util.inspect(data, true, null))
  return data;
};