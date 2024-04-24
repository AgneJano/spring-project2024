import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TaskPageWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskDetails = styled.div`
  margin-bottom: 20px;
`;

const TaskActions = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  button {
    margin-right: 10px;
  }
`;

const BackButton = styled.button`
  font-family: 'Poppins', sans-serif;
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
`;

const TaskPage = ({ task, handleDelete }) => {
  const { taskId, title, description, status, priority, createDate, editDate } = task;

  return (
    <TaskPageWrapper>
      <TaskDetails>
        <h2>Task ID: {taskId}</h2>
        <h3>Title: {title}</h3>
        <p>Description: {description}</p>
        <p>Status: {status}</p>
        <p>Priority: {priority}</p>
        <p>Create Date: {createDate}</p>
        <p>Edit Date: {editDate}</p>
      </TaskDetails>
      <TaskActions>
        <Link to={`/tasks/edit/${taskId}`}><button><i className="fas fa-edit"></i> Edit</button></Link>
        <button onClick={() => handleDelete(taskId)}><i className="fas fa-trash-alt"></i> Delete</button>
      </TaskActions>
      <Link to="/tasks"><BackButton>Back</BackButton></Link>
    </TaskPageWrapper>
  );
};

export default TaskPage;
