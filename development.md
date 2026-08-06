#### Test

Run `npm test`. This runs the doctests in `fun.js` and the PureScript
test suite (spago test).

#### Build

The JavaScript and PureScript code is bundled into a single file,
`app.js`:

    $ npm run build

PureScript sources in `src/` are compiled with spago into `output/`, then
`index.js`, `chart.js`, `fun.js` and the npm packages `jquery` and `d3`
are bundled together with esbuild.

#### Purescript

The business logic in `src/*.purs` is compiled with the modern PureScript
toolchain (PureScript 0.15 and spago). Dependencies are declared in
`spago.yaml`.

#### Deployment

See the [deployment notes](deployment.md)
