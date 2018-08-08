switch (process.env.NODE_ENV.trim()) {
    case 'prod':
    case 'production':
        module.exports = require('./webpack.dev.config');
        break;
    case 'dev':
    case 'development':
    default:
        module.exports = require('./webpack.dev.config');
        break;
}