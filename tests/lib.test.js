"use strict";

const assert = require("assert");
const { tokenize, summarize } = require("../src/lib");

const tokens = tokenize("a b a");
const summary = summarize(tokens);
assert.strictEqual(summary.a, 2);
assert.strictEqual(summary.b, 1);
