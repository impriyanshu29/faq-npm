import { defineConfig } from "vite";
import typescript from "@rollup/plugin-typescript";


export default defineConfig({
    input: "src/index.ts",
    output: {
        dir: "dist",
        format: "es",
        name:"count-pack"
    },
    external: ["react", "react-dom"],
    plugins: [typescript({ tsconfig: "tsconfig.json" })],
});