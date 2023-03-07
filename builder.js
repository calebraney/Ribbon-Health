require("esbuild")
  .build({
    entryPoints: ["src/index.js"],
    bundle: true,
    minify: false,
    watch: true,
    sourcemap: false,
    outfile: "dist/index.js",
  })
  .catch(() => ProcessingInstruction.exit(1));
