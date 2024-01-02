module.exports = {
  testRegex: '((\\.|/*.)(test))\\.js?$',
  moduleFileExtensions: ['js', 'jsx'],
  modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/sandbox/'],
  moduleNameMapper: {
    '^.+.(styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.css$': 'identity-obj-proxy',
    '^/(.*)$': 'src/$1'
  },
  moduleDirectories: ['<rootDir>', './src', 'node_modules']
}
