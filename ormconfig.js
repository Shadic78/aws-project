module.exports = {
  type: 'sqlite',
  database: ':memory:',
  entities: ['dist/entities/**/*.js'],
  dropSchema: true,
  synchronize: true,
};
