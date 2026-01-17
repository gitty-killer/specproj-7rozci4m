"use strict";

const fs = require("fs");
const { tokenize, summarize } = require("./lib");

const input = fs.readFileSync(0, "utf8");
const tokens = tokenize(input);
const summary = summarize(tokens);
console.log(JSON.stringify(summary));
