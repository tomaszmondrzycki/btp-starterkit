import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  globalSetup: "./test/setup.ts",
  testPathIgnorePatterns: ["/node_modules/", "/gen/"],

  // ✅ THIS IS THE FIX
  transform: {
    "^.+\\.ts$": ["ts-jest", { tsconfig: "tsconfig.json" }]
  },

  // ✅ ALSO IMPORTANT (so Jest resolves TS modules properly)
  moduleNameMapper: {
    "^#cds-models/(.*)$": "<rootDir>/@cds-models/$1"
  }
};

export default config;