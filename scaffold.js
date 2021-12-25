const fs = require("fs");
const args = process.argv.slice(2);

function createFolder(component) {
  const directory = `./${component}`;

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
}

function writeFile(component, type) {
  const filepath =`./${component}/${type}.js`;

  fs.writeFile(filepath, '//Various approaches here:' , (err) => {
    if (err) throw err;
    console.log("Created file: ", filepath);
    return true;
  });
}

function generate(component) {
  createFolder(component);

  const fileTypes = ["solution"];

  for (let type of fileTypes) {
    writeFile(component, type)
  }
}

generate(args[0]);