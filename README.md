# Maps

The maps! They're written with Leaflet and React, and bundled together
with Webpack.

## Development

We're using webpack to bundle up the maps, which means you need to install
a giant pile of things for development. To fiddle with the development
version do:

```
npm install
npm start
```

This starts the hot-reload webpack server. If you want to build the map
for production (export the bundled webpack JS file) you can do:

```
npm run-script build
```

It should be fine on any `npm` >= 3.

## Updating the utility repo

There's a [utility repo](https://github.com/AntiEvictionBoston/utility)
which we're using as a makeshift CDN. There's
a [script](./script/pre-push) which will automate updating the utility
repo if you add it as a `pre-push` hook in `.git`. These aren't copied
between git repos, so you need to do:

```
cp script/pre-push .git/hooks/pre-push
```

Then it should work! It expects the utility repo to be at `../utility`,
relative to the directory that the map is cloned in.
