# [www.tm-viz.netlify.app](https://tm-viz.netlify.app/)

This is a fork of [turingmachine.io](http://turingmachine.io) (GitHub: [aepsilon/turing-machine-viz](https://github.com/aepsilon/turing-machine-viz)).


## Changes
- A slider has been added to adjust the TM's animation speed.
- An option for neutral movement (`N`) has been added.
- 2-tuples (`(x/y)`) have been introduced as possible tape symbols with a suitable graphical representation, allowing for better visualization of the multi-track technique.
- A counter for tracking the number of transitions executed by the TM has been added.

## Development Setup

If you want to work on the site itself, here’s how to get started:

Clone the repo and run `npm install` in the folder. Afterwards, use `npm start` to host the site locally on a [webpack server], by default at localhost:8080.

`npm run depgraph` or `depgraph-noext` (requires [madge] and [Graphviz]) produces
a visual dependency graph that’s good for getting a feel for the code layout.

[webpack server]: https://webpack.github.io/docs/webpack-dev-server.html
[madge]: https://github.com/pahen/madge
[Graphviz]: http://www.graphviz.org/


## Dependencies

Thanks go to the authors of the following runtime dependencies:

* [Ace] code editor
* [bluebird.js] cancellable promises
* [Bootstrap] with the [lumen] theme
* [clipboard.js] one-click copy to clipboard
* [D3] visualization and DOM manipulation library
* [jQuery]
* [js-yaml] parser & serializer
* [lodash] and [lodash/fp] utilities

[Ace]: https://ace.c9.io/
[bluebird.js]: http://bluebirdjs.com/
[Bootstrap]: https://getbootstrap.com/
[clipboard.js]: https://clipboardjs.com/
[D3]: https://d3js.org/
[jQuery]: https://jquery.com
[js-yaml]: https://github.com/nodeca/js-yaml
[lodash]: https://github.com/lodash/lodash
[lodash/fp]: https://github.com/lodash/lodash/wiki/FP-Guide
[lumen]: https://bootswatch.com/lumen/
