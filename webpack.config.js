const { AureliaPlugin } = require('aurelia-webpack-plugin');

module.exports = {
      //entry: should not actually be needed as Karma should pass in the entry, but without it the error 
      //"TypeError: request.replace is not a function" is thrown to the console
      //Refer https://github.com/aurelia/webpack-plugin/issues/134 for more information
      entry:'xxx',
      resolve:{
        extensions: ['.ts', '.js'],
        modules: ['tests', 'node_modules'],
      },
      module:{
        rules: [
          { test: /\.ts$/i,  loader: 'ts-loader?silent=true' },
        ]
      },
      plugins:[ 
        //need {aureliaApp:undefined} as we have only a basic test project wihtout any main app
        new AureliaPlugin({aureliaApp:undefined}), 
        ]
  };
  