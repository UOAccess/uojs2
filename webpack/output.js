const { resolve } = require('path');
const config = require('./../configs');

const result = {
    development : {
        path            : resolve(global.webpack.context, 'public'),
        publicPath      : `http://${config['server.host']}:${config['dev-server.port']}/`,
        pathinfo        : true,
        filename        : 'bundle.js'
    },
    production  : {
        path            : resolve(global.webpack.context, 'public'),
        filename        : '[chunkhash].js',
        publicPath      : '/'
    }
};

module.exports = result[global.webpack.env];
