import path from 'path';

module.exports = {
  cliente: 'sqlite3',
  connection: {
    filname: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
  },
  migrations: {
    diretory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true,
}