import { pool } from '../db/postgresConnection.mjs';

const userModel = {

  // registers new user to PlanPro.
  createUser: async (newUser) => {
    try {
      const {
        name,
        email,
        password,
        role = 'user',
        registered_on,
      } = newUser;

      const result = await pool.query(
        'INSERT INTO users (name, email, password, registered_on, role) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [name, email, password, registered_on, role],
      );
      return result.rows[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  // We need to check in DB, if there is no similar emails to register new user.
  getUserByEmail: async ({ email }) => {
    try {
      const result = await pool.query('SELECT * FROM users WHERE email = $1', [
        email,
      ]);
      return result.rows[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default userModel;