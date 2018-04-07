const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const parse = require('react-docgen');
const chokidar = require('chokidar');

const paths = {
  examples: path.join(__dirname, '../src', 'docs', 'examples');
  components: path.join(__dirname, '../src', 'components');
  output: path.join(__dirname, '../config', 'componentData.js');
};

const enableWatchMode = process.argv.slice(2) == '--watch';

if (enableWatchMode) {
  chokidar.watch([paths.examples, paths.components]).on('change', function(event, path){
    generate(paths);
  });
} else {
  generate(paths);
}

function generate(paths) {

}
