import * as esbuild from 'esbuild';

await esbuild
  .build({
    entryPoints: ['src/home.js', 'src/product.js', 'src/case-study.js', 'src/use-cases.js'],
    bundle: true,
    minify: true,
    watch: true,
    sourcemap: false,
    outdir: 'dist/',
  })
  .catch(() => ProcessingInstruction.exit(1));
