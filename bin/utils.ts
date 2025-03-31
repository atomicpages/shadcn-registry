import { join, resolve } from "node:path";
import { exec as baseExec, spawn as baseSpawn } from "child_process";
import { statSync } from "fs";

import { promisify } from "util";

export const exec = promisify(baseExec);

/**
 * Promise version of spawn
 * @param cmd the command to run
 * @param args any and all args to pass
 */
export function spawn(...args: string[]) {
  const command = baseSpawn(
    resolve(import.meta.dirname, "../node_modules/.bin/nlx"),
    args,
    {
      stdio: ["pipe", "inherit", "inherit"],
    },
  );

  process.stdin.pipe(command.stdin);

  return new Promise<number>((resolve, reject) => {
    command.on("close", resolve);
    command.on("disconnect", resolve);

    command.on("exit", (code) => {
      if (code === 0) {
        resolve(code);
      } else {
        reject(code);
      }
    });
  });
}

/**
 * Creates all the args passed to {@link spawn}
 * @param args the commander args
 */
export function createArgs<T extends object>(args: T) {
  // logger.debug(`Creating args: ${JSON.stringify(args)}`);

  return Object.entries(args)
    .map(([key, value]) => {
      if (typeof value === "boolean") {
        if (value === true) {
          return `--${key}`;
        }

        return "";
      }

      return `--${key}=${value}`;
    })
    .filter(Boolean);
}

export async function loadComponentsConfig({
  cwd,
  path,
}: {
  cwd: string;
  path: string;
}) {
  const file = join(cwd, "components.json");

  const { default: components } = await import(file, {
    with: { type: "json" },
  });
}

let pkg: "bunx" | "pnpm dlx" | "yarn dlx" | "npx";

/**
 * Gets the package manager runner of choice
 * @param root
 * @returns
 */
export function getPackageManagerRunner(root = process.cwd()) {
  if (pkg) {
    return pkg;
  }

  if (statSync(resolve(root, "bun.lockb")).isFile()) {
    pkg = "bunx";
  } else if (statSync(resolve(root, "pnpm-lock.yml")).isFile()) {
    pkg = "pnpm dlx";
  } else if (statSync(resolve(root, "yarn.lock")).isFile()) {
    pkg = "yarn dlx";
  }

  pkg = "npx";

  return pkg;
}
