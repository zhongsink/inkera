module.exports = {
    production: {
        adapter: 'mysql2',
        encoding: 'utf8',
        reconnect: false,
        database: 'inkera_production',
        pool: 5,
        username: 'root',
        password: '2303680'
    },
    development: {
        //host: 192.168.1.243
        adapter: 'mysql2',
        encoding: 'utf8',
        reconnect: false,
        database: 'inkera_development',
        pool: 5,
        username: 'root',
        password: '2303680'
    },
    test: { 
        adapter: 'mysql2',
        encoding: 'utf8',
        reconnect: false,
        database: 'inkera_test',
        pool: 5,
        username: 'root',
        password: '2303680'
    }
}