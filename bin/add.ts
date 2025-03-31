import type { program as programType } from "@commander-js/extra-typings";
import { createArgs } from "./utils";
import { execa } from "execa";
import path from "node:path";

export function add(program: typeof programType) {
  return program
    .command("add [components...]")
    .description("add a component to your project")
    .option("-y, --yes", "skip prompts and use default values", false)
    .option("-o, --overwrite", "overwrite existing component", false)
    .option(
      "-c, --cwd <cwd>",
      "specify the directory to add the component",
      process.cwd(),
    )
    .option("-a, --all", "add all available components", false)
    .option("-p, --path <path>", "specify the path to the component")
    .option("-s, --silent", "mute output", false)
    .option(
      "--src-dir <dir>",
      "use the src directory when creating a new project",
    )
    .action(async (components, options) => {
      try {
        const componentsConfig = new Set<string>(
          (
            (await import("./components.json", { with: { type: "json" } }))
              .default as string[]
          ).map((line) => path.basename(line, path.extname(line))),
        );

        for (const component of components) {
          if (componentsConfig.has(component)) {
            // TODO: copy file
          } else {
            // const { output } = await spawn(
            //   "bunx",
            //   ["shadcn", "add", ...createArgs(options), ...components],
            //   {
            //     stdio: ["pipe", "inherit", "inherit"],
            //   },
            // );

            // console.log(output);
            await execa(
              `bunx shadcn add ${createArgs(options).join(" ")} ${components.join(" ")}`,
            );
          }
        }
      } catch (e: unknown) {
        console.error(e);
        process.exit(1);
      }
    });
}
