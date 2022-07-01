const path = require('path')

const presets = ['babel-preset-expo']
const plugins = [[
  'module-resolver',
  {
    root: ['./'],
    alias: {
      /**
       * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
       */
      '@': path.resolve(__dirname, 'src')
    },
    extensions: [
      '.android.js',
      '.android.ts',
      '.android.tsx',
      '.ios.js',
      '.ios.ts',
      '.ios.tsx',
      '.web.js',
      '.web.ts',
      '.web.tsx',
      '.native.js',
      '.native.ts',
      '.native.tsx',
      '.js',
      '.jsx',
      '.json',
      '.tsx',
      '.ts',
    ],
  },
], 'react-native-reanimated/plugin']
if (process.env.NEXT_APP === 'true') {
  presets.unshift('next/babel')
  plugins.unshift(
    ["nativewind/babel", { mode: "compileOnly" }],
    'inline-react-svg',
    'transform-flow-strip-types',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  )
} else {
  plugins.unshift(["nativewind/babel", { mode: "compileOnly" }], 'inline-dotenv')
}

// console.log('plugins', plugins)
// console.log('presets', presets)

module.exports = {
  plugins,
  presets,
};
