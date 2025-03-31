import { program } from "@commander-js/extra-typings";
import { init } from "./init";
import { add } from "./add";

const prog = program.description(
  "A small wrapper around shadcn with my enhanced shadcn components",
);

init(prog);
add(prog);

program.parse(process.argv);
