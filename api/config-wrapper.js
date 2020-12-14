const dotenv = require("dotenv");
const fs = require("fs");
const replace = require("replace");
const file = ".env";

class ConfigWrapper {
  constructor() {
    this.params = dotenv.config().parsed;
  }

  get(key) {
    return this.params[key];
  }

  set(key, value) {
    if (key in this.params) {
      replace({
        regex: new RegExp(`${key}`+"=.+"),
        replacement: `${key}=${value}`,
        paths: [file],
        recursive: true,
        silent: true,
      });
      this.params[key] = value;
    } else {
      fs.appendFile(file, `${key}=${value}\n`, (err) => {
        if(err) throw err;
        console.log("Parameter has been added!");});
      this.params[key] = value;
    }
    return this;
  }

  showParams() {
    for (const k in this.params) {
      console.log(k, this.params[k]);
    }
  }
}


module.exports = ConfigWrapper;