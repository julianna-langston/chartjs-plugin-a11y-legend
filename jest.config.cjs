/** @type {import('jest').Config} */
module.exports = {
    moduleFileExtensions: ["js", "ts"],
    fakeTimers: {
        enableGlobally: true
    },
    // setupFiles: ["<rootDir>/test/_setup.ts"],
    preset: "ts-jest/presets/default-esm",
    transform: {
        "^.+\\.ts?$": ["ts-jest", {
            useESM: true,
            isolatedModules: true
        }]
    },
    transformIgnorePatterns: [
        "node_modules/!(chart\.js)/*"
    ],
    testRegex: ".+\\.test\\.ts?$",
    testEnvironment: "jsdom",
    collectCoverageFrom: [
        "src/plugin.ts"
    ],
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "babel",
    setupFiles: [
        "<rootDir>/tests/_setup.js"
    ]
};
