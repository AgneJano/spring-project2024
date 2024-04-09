import { pool } from '../db/postgresConnection.mjs';

const userModel = {
    
    // registers new user to PlanPro.
    createUser: async (newUser) => {
        try {
          const {
            username,
            email,
            password,
            role = 'user',
            registered_on,
          } = newUser;
    
          const result = await pool.query(
            'INSERT INTO users (username, email, password, role, registered_on) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [username, email, password, role, registered_on],
          );
          return result.rows[0];
        } catch (error) {
          console.error(error);
          throw error;
        }
      },
};

export default userModel;