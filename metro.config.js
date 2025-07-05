

// const { getDefaultConfig } = require('expo/metro-config');
// const path = require('path');

// const config = getDefaultConfig(__dirname);

// // Add .cjs to source extensions if needed
// config.resolver.sourceExts.push('cjs');

// // Only alias on web
// if (process.env.EXPO_PLATFORM === 'web') {
//   config.resolver.extraNodeModules = {
//     ...(config.resolver.extraNodeModules || {}),
//     'react-native-maps': path.resolve(__dirname, 'src/webStubs/react-native-maps.js'),
//   };
//   console.log('🚀 Using web stub for react-native-maps');
// } else {
//   console.log('📱 Using native react-native-maps');
// }

// module.exports = config;

// const { getDefaultConfig } = require('expo/metro-config');
// const path = require('path');

// const config = getDefaultConfig(__dirname);

// // Add .cjs to source extensions if needed
// config.resolver.sourceExts.push('cjs');


// const isWeb = process.env.BROWSER !== undefined || process.env.TERM_PROGRAM === 'vscode';

// if (isWeb) {
//   config.resolver.extraNodeModules = {
//     ...(config.resolver.extraNodeModules || {}),
//     'react-native-maps': path.resolve(__dirname, 'src/webStubs/react-native-maps.js'),
//   };
//   console.log('🚀 Using web stub for react-native-maps');
// } else {
//   console.log('📱 Using native react-native-maps');
// }

// module.exports = config;


const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Add `.cjs` extension if needed
config.resolver.sourceExts.push('cjs');

// ✅ Use platform-specific aliasing
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (platform === 'web' && moduleName === 'react-native-maps') {
    return {
      type: 'sourceFile',
      filePath: path.resolve(__dirname, 'src/webStubs/react-native-maps.js'),
    };
  }

  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;





