import { resolve } from "path";

export const mode = "development";
export const entry = {
  main: "./src/app.js",
};
export const output = {
  path: resolve("./dist"),
  filename: "[name].js",
};
