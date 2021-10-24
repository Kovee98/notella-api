const path = require('path');

const config = {
    port: process.env.PORT || 4000,
    dbUrl: process.env.DB_URL,
    dbPass: process.env.DB_PASS,
    dbDir: path.join(__dirname, '../dbs'),
    redirectUrl: process.env.REDIRECT_URL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
};

module.exports = config;
