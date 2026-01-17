"use strict";

function tokenize(text) {
  return text.split(/\s+/).filter(Boolean);
}

function summarize(tokens) {
  const counts = {};
  for (const t of tokens) {
    counts[t] = (counts[t] || 0) + 1;
  }
  return counts;
}

module.exports = { tokenize, summarize };
