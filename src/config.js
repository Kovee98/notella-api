const path = require('path');

const config = {
    port: process.env.PORT || 4000,
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: Number(process.env.REDIS_PORT) || 6379,
        // db: 2,
        // ttl: 60 * 60
    },
    maxAge: Number(process.env.MAX_AGE) || 24 * 60 * 60 * 1000,
    cookieKey: process.env.COOKIE_KEY,
    dbHost: process.env.DB_HOST,
    dbUrl: process.env.DB_URL,
    dbPass: process.env.DB_PASS,
    dbDir: path.join(__dirname, '../dbs'),
    redirectUrl: process.env.REDIRECT_URL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
};

module.exports = config;
