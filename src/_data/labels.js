const { parse } = require("csv-parse");
const fs = require("fs");
const util = require("util")
const extras = 0

const processFile = async () => {
  let index = 1000
  const records = [];
  const parser = fs
    .createReadStream("src/_data/labels_data.csv")
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
  for (let i=0; i < extras ; i++) {
    index += 1
    records.push({
      index: index
    })
  }
  console.log(records.length, " labels created.")
  return records;
};

module.exports = async function() {
  const data = await processFile();
  console.log(util.inspect(data, true, null))
  return data;
};