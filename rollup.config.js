import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'

const pkg = require('./package.json');

const libraryName = pkg.name;

export default {
  input: `compiled/index.js`,
  output: [
    {file: pkg.main, name: libraryName, format: 'umd'},
    {file: pkg.module, format: 'es'},
  ],
  sourcemap: true,
  external: [],
  watch: {
    include: 'compiled/**',
  },
  plugins: [
    commonjs(),
    resolve(),
    sourceMaps(),
  ]
}
