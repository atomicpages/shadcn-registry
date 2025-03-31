import path from "node:path";
import fs from "node:fs/promises";

import { existsSync } from "node:fs";

(async function () {
  console.log(process.cwd());
  const componentFilePath = path.resolve(process.cwd(), "components.json");

  if (existsSync(componentFilePath)) {
    const { default: components } = await import(componentFilePath, {
      with: { type: "json" },
    });

    console.log(components);
  }
})();
