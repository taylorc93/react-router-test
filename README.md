This project is a proof of concept of how effective the `sideEffects: false` flag is for react router dom. To test:

1. `yarn` or `npm i`
1. Run `npm run build`
1. Note the bundle size in either the terminal or bundle analyzer
1. Add `sideEffects: false` to the `package.json` for the `react-router-dom` package.
1. Rerun `npm run build`
1. Note the difference in bundle sizes. This is illustrated more clearly by the bundle analyzer.
