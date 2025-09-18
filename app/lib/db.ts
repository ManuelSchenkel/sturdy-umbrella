import postgres from 'postgres';

const sql = postgres('postgres://username:password@host:port/database',{ 
    ssl: 'require',
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

export default sql;