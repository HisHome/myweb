var merge = require('webpack-merge');
var prodEnv = require('./prod.env');

var NODE_ENV = `'${process.env.NODE_ENV}'`;

module.exports = merge(prodEnv, {
    NODE_ENV: NODE_ENV
    // NODE_ENV: '"development"'
});
