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
which we're using as a makeshift CDN. In this repo there's
a [script](./script/pre-push) which will automatically update this repo.

Just do:

```
./script/pre-push
```

(this was supposed to be a `pre-push` git hook, but it turns out
committing to another repo in a pre-push hook is wacky? anyway, it expects
the utility repo to be cloned at `../utility`)
