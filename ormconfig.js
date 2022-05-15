module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: 'sicei',
  port: 3306,
  entities: ['dist/entities/**/*.js'],
};
