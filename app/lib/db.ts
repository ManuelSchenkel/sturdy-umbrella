import postgres from 'postgres';

const sql = postgres({ 
    ssl: 'require',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

export default sql;