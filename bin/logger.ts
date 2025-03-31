import log from "loglevel";

log.setLevel(import.meta.env.NODE_ENV === "development" ? "debug" : "info");

export { log as logger };
