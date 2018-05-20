const path = require('path'),
  fs = require('fs');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: `src/index.html`,
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    modules: [path.resolve(__dirname, 'src')]
    .concat([path.resolve(__dirname, 'node_modules')]).concat(
      getFullLowerCaseDirectoriesRecursive(path.resolve(__dirname, 'src'))
    ),
    extensions: ['.js', '.jsx']
  },
};

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