import styled from 'styled-components';
import TaskColumn from '../components/TaskColumn';
import tasksData from '../data/tasks.json';
import downloadIcon from '../assets/download.svg';
import PlusIcon from '../assets/plus.svg';
import SearchIcon from '../assets/search.svg';

const ProjectPageContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`;

const ProjectTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  margin-top: 66px;
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
  line-height: 1.5; 
`;

const ButtonContainer = styled.div`
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AddTaskButton = styled.button`
  background-color: #ffffff;
  color: #D9D9D9;
  border: 1px solid #DDDDDD;
  border-radius: 4px;
  padding: 8px 20px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
`;

const PlusIconWrapper = styled.span`
display: flex;
align-items: center;
justify-content: center; 
margin-right: 5px;
`;

const SearchInputContainer = styled.div`
  position: relative;
`;

const SearchIconImg = styled.img`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const SearchInput = styled.input`
color: #D9D9D9;
  padding: 8px 30px 8px 35px;
  border: 1px solid #D9D9D9;
  font-family: 'Poppins', sans-serif;
  border-radius: 4px;
  width: 200px;
  &::placeholder {
    color: #D9D9D9;
`;

const DownloadIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
`;

const TaskColumnWrapper = styled.div`
  flex: 1;
  border: 1px solid #D9D9D9; 
  border-radius: 4px;
  padding: 10px;
  margin-right: 10px; 
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
        <ButtonGroup>
          <AddTaskButton>
            <PlusIconWrapper>
              <img src={PlusIcon} alt="Add Task" />
            </PlusIconWrapper>
            Add Task
          </AddTaskButton>
          <SearchInputContainer>
            <SearchIconImg src={SearchIcon} alt="Search" />
            <SearchInput type="text" placeholder="Search..." />
          </SearchInputContainer>
          <DownloadIcon src={downloadIcon} alt="Download" />
        </ButtonGroup>
      </ButtonContainer>
      <ColumnsContainer>
  <TaskColumnWrapper>
    <TaskColumn title="To Do" tasks={tasksToDo} />
  </TaskColumnWrapper>
  <TaskColumnWrapper>
    <TaskColumn title="In Progress" tasks={tasksInProgress} />
  </TaskColumnWrapper>
  <TaskColumnWrapper>
    <TaskColumn title="Done" tasks={tasksDone} />
  </TaskColumnWrapper>
</ColumnsContainer>
    </ProjectPageContainer>
  );
}

export default ProjectPage;
