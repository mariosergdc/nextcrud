import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'tienda',
});

export const createDatabase = async () => {
  try {
    await connection.query('CREATE DATABASE IF NOT EXISTS tienda');
    console.log('Base de datos "tienda" creada correctamente');
  } catch (error) {
    console.error('Error al crear la base de datos:', error);
  }
};

export const createTableProducts = async () => {
  try {
    await connection.query(`
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2) NOT NULL
      )
    `);
    console.log('Tabla "products" creada correctamente');
  } catch (error) {
    console.error('Error al crear la tabla "products":', error);
  }
};

export default connection;