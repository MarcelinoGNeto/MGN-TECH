const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@mgn-tech/design-system', 
  '@mgn-tech/utils'
]);

/** 
 * @type {import('next').NextConfig} 
 */

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
