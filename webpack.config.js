

module.exports = () => {
    return [{
      resolve:{
        extensions: ['.ts', '.js'],
        modules: ['node_modules'],
      },
      module:{
        rules: [
          { test: /\.ts$/i,  loader: 'ts-loader?silent=true' },
        ]
      },
      plugins:[ 
        new AureliaPlugin(),
        ]
      }];
  };
  