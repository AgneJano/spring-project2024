import styled from 'styled-components';

const ColumnContainer = styled.div`
  flex: 1;
  margin-right: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 10px;
`;

const ColumnTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function TaskColumn({ title, tasks }) {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      <TaskList>
        {tasks.map(task => (
          <TaskItem key={task.id}>
            {task.name}
          </TaskItem>
        ))}
      </TaskList>
    </ColumnContainer>
  );
}

export default TaskColumn;
