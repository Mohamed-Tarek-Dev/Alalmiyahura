import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        // lib: {
        //     entry: resolve(
        //         __dirname,
        //         "./src/assets/plugins/jquery-3.7.0.min.js",
        //     ),
        //     name: "Jquery",
        //     fileName: "jquery-3.7.0.min.js",
        // },

        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "./src/pages/about.html"),
                about: resolve(__dirname, "./index-ar.html"),
                // jquery: resolve(__dirname, "./src/plugins/jquery-3.7.0.min.js"),
            },
            output: {},
        },
    },
    publicDir: "public",
    server: {
        middlewareMode: false,
    },
    appType: "mpa",
    base: "/",
});
