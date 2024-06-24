const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js', // Replace with your entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // Add other webpack configuration as needed
};
