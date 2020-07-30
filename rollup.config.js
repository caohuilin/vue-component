import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import renameExtensions from '@betit/rollup-plugin-rename-extensions'
import cleaner from 'rollup-plugin-cleaner'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

import pkg from './package.json'

const Global = `var process = {
  env: {
    NODE_ENV: 'production'
  }
}`

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      banner: Global
    },
    {
      file: pkg.module,
      format: 'amd',
      exports: 'named',
      sourcemap: true,
      banner: Global
    }
  ],
  external: ['@qn-pandora/visualization-sdk'],
  plugins: [
    cleaner({ targets: [ 'dist' ] }),
    commonjs(),
    resolve(),
    typescript({ rollupCommonJSResolveHack: true, clean: true }),
    // This extension renames all .vue and .ts to .js
    // (and updates the imports)
    renameExtensions({
      include: ['**/*.ts', '**/*.vue'],
      mappings: { '.vue': '.vue.js', '.ts': '.js' }
    }),
    vue()
  ]
}