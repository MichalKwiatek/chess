const path = require('path'),
  fs = require('fs');

module.exports = {
  "modulePaths":
    [path.resolve(__dirname, 'src')]
      .concat([path.resolve(__dirname, 'node_modules')]).concat(
        getFullLowerCaseDirectoriesRecursive(path.resolve(__dirname, 'src'))
      )
}


function getFullLowerCaseDirectoriesRecursive(forPath) {
  var directories = []
  getRecursively(forPath)

  function getRecursively(levelPath) {
    var levelDirectories = getFullLowerCaseDirectories(levelPath)
    directories = directories.concat(levelDirectories)
    levelDirectories.forEach(directory => getRecursively(directory))
  }
  console.log(directories)
  return directories
}

function getFullLowerCaseDirectories(forPath) {
  return getLowerCaseDirectories(forPath).map(relativeDir =>
    path.resolve(forPath, relativeDir)
  );
}

function getLowerCaseDirectories(forPath) {
  return getDirectories(forPath).filter(wordIsLowercase);
}

function getDirectories(forPath) {
  return fs
    .readdirSync(forPath)
    .filter(file => fs.lstatSync(path.join(forPath, file)).isDirectory());
}

function wordIsLowercase(word) {
  return /[a-z]/.test(word[0]);
}
