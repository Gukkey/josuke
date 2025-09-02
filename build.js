import fs from "fs";
import path from "path";

// Create dist directory
if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

// Read the source file
const sourceCode = fs.readFileSync("index.js", "utf8");

// Generate ES Module (just copy the source)
fs.writeFileSync("dist/index.mjs", sourceCode);

// Generate CommonJS version
const cjsCode = sourceCode
  .replace(
    /import\s+(.+)\s+from\s+['"](.+)['"];?/g,
    'const $1 = require("$2");'
  )
  .replace(/export\s*{\s*(.+)\s*};?/g, "module.exports = { $1 };");

fs.writeFileSync("dist/index.cjs.js", cjsCode);

console.log("✅ Build complete! Generated:");
console.log("  - dist/index.mjs (ES Module)");
console.log("  - dist/index.cjs.js (CommonJS)");
