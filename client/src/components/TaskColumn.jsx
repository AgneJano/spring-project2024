import styled from 'styled-components';
import editIcon from '../assets/edit.svg';
import trashIcon from '../assets/trash.svg';

const ColumnContainer = styled.div`
  flex: 1;
  margin-right: 20px;
  border-radius: 5px;
  padding: 10px;
`;

const ColumnTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TaskItem = styled.li`
  background-color: white;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const TaskContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskName = styled.span`
  font-size: 16px;
`;

const TaskDate = styled.span`
  font-size: 12px;
  color: #666;
  margin-bottom: 5px;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const Line = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #eee;
`;

function TaskColumn({ title, tasks }) {
  const handleEditClick = (taskId) => {
    // Redagavimas
    console.log('Edit task with ID:', taskId);
  };

  const handleDeleteClick = (taskId) => {
    // Pašalinimas
    console.log('Delete task with ID:', taskId);
  };

  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      <TaskList>
        {tasks.map(task => (
          <TaskItem key={task.id}>
            <TaskContent>
              <TaskDate>{task.date}</TaskDate>
              <TaskName>{task.name}</TaskName>
            </TaskContent>
            <IconsContainer>
              <IconButton onClick={() => handleEditClick(task.id)}>
                <Icon src={editIcon} alt="Edit" />
              </IconButton>
              <IconButton onClick={() => handleDeleteClick(task.id)}>
                <Icon src={trashIcon} alt="Trash" />
              </IconButton>
            </IconsContainer>
            <Line />
          </TaskItem>
        ))}
      </TaskList>
    </ColumnContainer>
  );
}

export default TaskColumn;
