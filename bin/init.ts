import type { program as programType } from "@commander-js/extra-typings";
import { createArgs, spawn } from "./utils";

export function init(program: typeof programType) {
  return program
    .command("init [components...]")
    .description("initialize your project and install dependencies")
    .option("-y, --yes", "skip prompts and use default values", true)
    .option("-f, --force", "force overwrite of existing configuration", false)
    .option(
      "-c, --cwd <cwd>",
      "specify the directory to initialize",
      process.cwd(),
    )
    .option("-d, --defaults", "use default configuration", false)
    .option("-a, --atoms", "initialize atoms", true)
    .option("-m, --molecules", "initialize molecules", true)
    .option("-s, --silent", "mute output", false)
    .option(
      "--src-dir <dir>",
      "use the src directory when creating a new project",
    )
    .action(async (components, options) => {
      await spawn("shadcn", "init", ...createArgs(options), ...components);
    });
}
