import styled from 'styled-components';
import editIcon from "../assets/icons/edit.svg";
import deleteIcon from "../assets/icons/delete.svg";



const ColumnContainer = styled.div`
  flex: 1;
  border-radius: 5px;
  padding: 10px;
  margin: 1.875rem auto 0;
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

const Line = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #eee;
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




function TaskColumn({ title, tasks, id, date }) {

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
      <ColumnTitle>{title}</ColumnTitle>
      <TaskList>
        {tasks.map(task => (
          <TaskItem key={task.id}>
            <TaskContent>
              <TaskDate>{task.date}</TaskDate>
              <TaskName>{task.name}</TaskName>
            </TaskContent>
{/* Kopijuota iš Santos */}
            <ImageContainer>
              
          {/* TO DO: funkcionalas */}
          <StyledIcon src={editIcon} />
          <StyledIcon
            src={deleteIcon}
            onClick={() => {
              console.log("Icon clicked"); // Add this line for debugging
              onDeleteClick(id);
            }}
          />
        </ImageContainer>



            
            <Line />
          </TaskItem>
        ))}
      </TaskList>
    </ColumnContainer>
  );
}

export default TaskColumn;
