import styled from 'styled-components';
import editIcon from '../assets/icons/edit.svg';
import deleteIcon from '../assets/icons/delete.svg';
import { getStatusSvgUrl, getTaskIcons } from '../mainFunctions';

const ColumnContainer = styled.div`
  flex: 1;
  border-radius: 5px;
  margin: 1.25rem auto 0;
`;

const ColumnTitle = styled.div`
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
  padding: 0rem 2.25rem 1rem;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #eee;
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

const ImageContainer = styled.p`
  display: flex;
  gap: 0.5rem;
`;
const StyledIcon = styled.img`
  &:hover {
    filter: brightness(0.5);
    transform: scale(0.9);
  }
`;

const Header = styled.div`
  display: flex;
  gap: 0.625rem;
  justify-content: center;
  padding-bottom: 2rem;
`;

const StatusBubble = styled.img`
  height: 1.375rem;
  width: 1.375rem;
`;

function TaskColumn({ title, tasks, id }) {
  const onDeleteClick = async (taskId) => {
    // const url = "https://api.jsonbin.io/v3/b/661eb81fe41b4d34e4e55765";
    // try {
    //   const response = await axios.delete(url, {
    //     headers: {
    //       "X-Master-Key":
    //         "$2a$10$ep7mKSMiDETvfKp/AyhAEez73Ll2iqMLhJoQ3ze8q/En5oV69kXdC",
    //       id: taskId,
    //     },
    //   });
    //   if (response.status === 200) {
    //     console.log(`Task with ID ${taskId} deleted successfully`);
    //     return true;
    //   } else {
    //     console.error(`Failed to delete task with ID ${taskId}`);
    //     return false;
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    //   return false;
    // }
  };

  return (
    <ColumnContainer>
      <Header>
        <StatusBubble src={getStatusSvgUrl(tasks[0].status)} alt="Task status bubble" />
        <ColumnTitle>{title}</ColumnTitle>
      </Header>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            <TaskContent>
              <TaskDate>{task.date}</TaskDate>
              <TaskName>{task.name}</TaskName>
            </TaskContent>
            <ImageContainer>
              <img src={getTaskIcons(task.status, task.priority).priorityIcon} alt="Priority Icon" />
              <StyledIcon src={editIcon} />
              <StyledIcon
                src={deleteIcon}
                onClick={() => {
                  console.log('Icon clicked'); // Add this line for debugging
                  onDeleteClick(id);
                }}
              />
            </ImageContainer>
            {/* <Line /> */}
          </TaskItem>
        ))}
      </TaskList>
    </ColumnContainer>
  );
}

export default TaskColumn;
