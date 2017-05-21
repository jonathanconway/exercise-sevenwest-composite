# exercise-sevenwest-composite

A front-end exercise for SevenWest.

## Installation

Clone and install via NPM (or Yarn):

```
git clone https://github.com/jonathanconway/exercise-sevenwest-composite
cd exercise-sevenwest-composite
npm install
```

## Running

```
npm start
```

## Caveats

* Only tested on Chrome, Safari, Firefox, Mobile Safari (iPad).
* Image compression technique could be optimised further.
* Currently the same build config is used for dev as for production. For the purposes of this simple exercise, that seems sufficient. For a more complex exercise, separate dev and production configs might be appropriate.
* The auto-reloading system is fairly primitive, relying on `nodemon` and `httpster`. Hot module reloading would be nicer.