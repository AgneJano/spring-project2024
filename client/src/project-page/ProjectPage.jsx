import styled from 'styled-components';
import TaskColumn from '../components/TaskColumn';
import tasksData from '../data/tasks.json';
import downloadIcon from '../assets/download.svg';

const ProjectPageContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`;

const ProjectTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
`;

const ProjectStatus = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
`;

const ProjectDescription = styled.p`
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const AddTaskButton = styled.button`
  background-color: #ffffff;
  color: #D9D9D9;
  border: none;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  margin-right: 10px;
  font-family: 'Poppins', sans-serif;
`;

const DownloadIcon = styled.img`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
`;

function ProjectPage() {
  const tasksToDo = tasksData.filter((task) => task.category === 'To Do');
  const tasksInProgress = tasksData.filter((task) => task.category === 'In Progress');
  const tasksDone = tasksData.filter((task) => task.category === 'Done');
  return (
    <ProjectPageContainer>
      <ProjectTitle>Project Name</ProjectTitle>
      <ProjectStatus>In Progress</ProjectStatus>
      <ProjectDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, libero ut faucibus bibendum, sapien
        nisi sagittis massa, sit amet cursus mauris libero eget nunc. Integer nec turpis in mi consequat lobortis.
        Nullam vitae mi id enim lacinia sodales. Duis ultricies nunc nec nisl cursus, eget fermentum sapien fringilla.
        Sed ac sapien vel ligula congue porta. Vivamus tincidunt vehicula sapien, sit amet tempus leo efficitur at.
        Suspendisse potenti. Sed sed posuere tortor. Sed congue magna eget erat vehicula, nec lobortis risus vehicula.
        Sed vel velit sed risus condimentum maximus. Donec hendrerit felis et odio interdum efficitur. Cras id suscipit
        elit.
      </ProjectDescription>
      <ButtonContainer>
        <AddTaskButton>Add Task</AddTaskButton>
        <SearchInput type="text" placeholder="Search..." />
        <DownloadIcon src={downloadIcon} alt="Download" />
      </ButtonContainer>
      <ColumnsContainer>
        <TaskColumn title="To Do" tasks={tasksToDo} />
        <TaskColumn title="In Progress" tasks={tasksInProgress} />
        <TaskColumn title="Done" tasks={tasksDone} />
      </ColumnsContainer>
    </ProjectPageContainer>
  );
}

export default ProjectPage;
