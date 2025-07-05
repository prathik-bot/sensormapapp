// const createExpoWebpackConfigAsync = require('@expo/webpack-config');
// const path = require('path');

// module.exports = async function (env, argv) {
//   const config = await createExpoWebpackConfigAsync(env, argv);

//   // Add alias for react-native-maps to stub on web
//   config.resolve.alias['react-native-maps'] = path.resolve(
//     __dirname,
//     'src/webStubs/react-native-maps.js'
//   );

//   return config;
// };

console.log('✅ Webpack config loaded - aliasing react-native-maps');

config.resolve.alias['react-native-maps'] = path.resolve(__dirname, 'src/webStubs/react-native-maps.js');
