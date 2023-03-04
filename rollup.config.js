import typescript from "@rollup/plugin-typescript";

export default [
    {
        input: "src/plugin.ts",
        output: [
            {
                file: "dist/plugin.js",
                name: "chartjsPluginA11yLegend",
                format: "iife"
            }
        ],
        plugins: [
            typescript({tsconfig: "./tsconfig.json"})
        ]
    },
    {
        input: "src/plugin.ts",
        output: [
            {
                file: "dist/plugin.mjs",
                format: "es"
            }
        ],
        plugins: [typescript({tsconfig: "./tsconfig.json"})]
    }
]