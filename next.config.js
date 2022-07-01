// @generated: @expo/next-adapter@2.1.0
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const withFonts = require('next-fonts');
const withImages = require('next-images');
const { withExpo } = require('@expo/next-adapter');
const withPlugins = require('next-compose-plugins');

const withTM = require('next-transpile-modules')([
  'react-native-web',
  "nativewind",
  "@react-native-community/hooks",
  'solito',
], {
  reactStrictMode: true
})

module.exports = withPlugins([
  withTM,
  withFonts,
  withImages,
  [withExpo, { projectRoot: __dirname, webpack5: true }]
], {
  images: {
    disableStaticImages: true
  }
});