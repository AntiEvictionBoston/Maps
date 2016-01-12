#East Boston leaflet map

A map centering on East Boston.

##Development

This map uses webpack to bundle up the map, which is written in React
using es2015. To fiddle with the development version:

```
npm install
npm start
```

##Updating the utility repo

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

The map is at [](antievictionboston.github.io/map.html).
