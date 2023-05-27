/** @type {import('jest').Config} */
module.exports = {
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    fakeTimers: {
        enableGlobally: true
    },
    // setupFiles: ["<rootDir>/test/_setup.ts"],
    preset: "ts-jest/presets/default-esm",
    transform: {
        "^.+\\.tsx?$": ["ts-jest", {
            useESM: true,
            isolatedModules: true
        }]
    },
    transformIgnorePatterns: [
        "node_modules/!(chart\.js)/*"
    ],
    testRegex: ".+\\.test\\.tsx?$",
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
