import styled from 'styled-components';
import TaskColumn from '../components/TaskColumn';
import tasksData from '../data/tasks.json';
import downloadIcon from '../assets/download.svg';
import Search from '../components/Search';
import CreateButton from '../components/CreateButton';
import { getStatusSvgUrl, getTaskIcons } from "../mainFunctions";

const ProjectPageContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 15px;
`;

const ButtonsContainer = styled.div`
    display: flex;
   gap: 0.625rem;
   max-width: 77.5rem;
   margin: 0 auto;
   @media (max-width: 48em){
        flex-direction: column;
        align-items: center
        padding: 0 1rem;
    }
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
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 10px;
  margin-right: 15px;
`;

const StatusBubble = styled.img`
  height: 1.375rem;
  width: 1.375rem;
`;


const Title = styled.p`
  font-weight: 500;
  font-size: 1.25rem;
`;

const DescriptionTitle = styled.p`
  font-weight: 500;
  font-size: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.313rem;
  max-height: 9.375rem;
  height: 100%;
`;


function ProjectPage( {status, name, description} ) {

  const tasksToDo = tasksData.filter((task) => task.category === 'To Do');
  const tasksInProgress = tasksData.filter((task) => task.category === 'In Progress');
  const tasksDone = tasksData.filter((task) => task.category === 'Done');

  const url = getStatusSvgUrl(status);
  const urlTask = getTaskIcons({status});

  return (
    <ProjectPageContainer>
      <StatusBubble src={url} alt="Project status bubble" />
      <Title>{name}</Title>
      <DescriptionContainer>
        <DescriptionTitle>Description</DescriptionTitle>
        {/* TO DO: max simboliu su tarpais 255, reiks kazkaip trimint desc jeigu bus ilgenis */}
        <Description>{description}</Description>
      </DescriptionContainer>
      <ButtonContainer>
        <ButtonsContainer>
          <CreateButton buttonTitle={'Add task'} />
          <Search />
          <DownloadIcon src={downloadIcon} alt="Download" />
        </ButtonsContainer>
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
