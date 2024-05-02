import { pool } from "../db/postgresConnection.mjs";

const projectModel = {
  getProjects: async (query) => {
    try {
        // Validate and set default values for query parameters
        const status = query.status;
        const paginate = query.paginate === "true";
        const page = parseInt(query.page) || 1;
        const limit = parseInt(query.limit) || 12;
        const name = query.name;
        const description = query.description;

        if (status && paginate) {
            // Case 1: When user needs to use both paginate and status together
            const offset = (page - 1) * limit;
            const projects = await pool.query(
                "SELECT * FROM projects WHERE status = $1 OFFSET $2 LIMIT $3",
                [status, offset, limit]
            );
            return projects.rows;
        } else if (status) {
            // Case 2: Only status
            const projects = await pool.query(
                "SELECT * FROM projects WHERE status = $1",
                [status]
            );
            return projects.rows;
        } else if (name) {
            // Case 3: Only name
            const projects = await pool.query(
                "SELECT * FROM projects WHERE name LIKE $1",
                [`%${name}%`]
            );
            return projects.rows;
        } else if (description) {
            // Case 4: Only description
            const projects = await pool.query(
                "SELECT * FROM projects WHERE description LIKE $1",
                [`%${description}%`]
            );
            return projects.rows;
        } else if (paginate) {
            // Case 5: Only paginate
            const offset = (page - 1) * limit;
            const projects = await pool.query(
                "SELECT * FROM projects OFFSET $1 LIMIT $2",
                [offset, limit]
            );
            return projects.rows;
        } else {
            // No filters or paginate provided, retrieve all projects
            const projects = await pool.query("SELECT * FROM projects");
            return projects.rows;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
},
  getProjectsById: async (id) => {
    try {
      const query = "SELECT * FROM projects WHERE id = $1";
      const result = await pool.query(query, [id]);
      return result.rows[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  createProject: async (projectData) => {
    try {
      const { name, description } = projectData;

      const result = await pool.query(
        "INSERT INTO projects (name, description, status) VALUES ($1, $2, 'in-progress') RETURNING *",
        [name, description]
      );

      return result.rows[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  deleteProject: async (id) => {
    try {
      const query = "DELETE FROM projects WHERE id = $1 RETURNING *";
      const result = await pool.query(query, [id]);
      return result.rows[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getProjectsByStatus: async (status) => {
    try {
      const query = "SELECT * FROM projects WHERE status = $1";
      const result = await pool.query(query, [status]);
      return result.rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  createTaskForProjectId: async (taskData) => {
    try {
      const {
        project_id,
        name,
        description,
        status = "to-do",
        priority = "medium",
      } = taskData;

      const result = await pool.query(
        "INSERT INTO tasks (project_id, name, description, status, priority) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [project_id, name, description, status, priority]
      );

      return result.rows[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getTasksByProjectsId: async (id) => {
    try {
      const query = "SELECT * FROM tasks WHERE project_id = $1";
      const result = await pool.query(query, [id]);
      return result.rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },



  getTaskById: async (projectId, taskId) => {
    try {
      const query = "SELECT * FROM tasks WHERE project_id = $1 AND id = $2";
      const result = await pool.query(query, [projectId, taskId]);
      return result.rows[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  },


};

export default projectModel;
