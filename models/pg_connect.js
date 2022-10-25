const Pool = require('pg').Pool
const pg_con = new Pool({
    user: 'djmzurgazyxpyh',
    host: 'ec2-44-209-24-62.compute-1.amazonaws.com',
    database: 'd4fk60q8aovj6g',
    password: '5f43a9a588861ed673112768c4b60826a474ec07911e9da60c03bae220d34c5d',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});


module.exports = pg_con;