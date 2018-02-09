const { AureliaPlugin } = require('aurelia-webpack-plugin');

module.exports = {
      //entry:'test1.spec.ts',
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
  