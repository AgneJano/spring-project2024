import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import TaskColumn from "../components/TaskColumn";
import tasksData from "../data/tasks.json";
import downloadIcon from "../assets/download.svg";
import Search from "../components/Search";
import CreateButton from "../components/CreateButton";
import { getStatusSvgUrl } from "../mainFunctions";

const ProjectPageContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 4.3rem 0 1.25rem;
`;

const ButtonContainer = styled.div`
  margin-bottom: 15px;
`;

const ButtonsContainer = styled.div`
    display: flex;
   gap: 0.625rem;
   max-width: 77.5rem;
   margin: 0 auto;
   padding: 4rem 0 0;
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
  &:hover {
    filter: brightness(0.5);
    transform: scale(0.9);
  }
`;

const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
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
  font-family: "Poppins", sans-serif;
`;

const DescriptionTitle = styled.p`
  font-weight: 500;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
  font-family: "Poppins", sans-serif;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.313rem;
  max-height: 9.375rem;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  gap: 0.625rem;
  padding-bottom: 1.875rem;
`;

function ProjectPage({ name, description, status }) {
  const { id } = useParams();

  const tasksToDo = tasksData.filter((task) => task.status === "to-do");
  const tasksInProgress = tasksData.filter(
    (task) => task.status === "in-progress",
  );
  const tasksDone = tasksData.filter((task) => task.status === "done");
  const url = getStatusSvgUrl(status);

  return (
    <>
      <ProjectPageContainer>
        <Header>
          <StatusBubble src={url} alt="Project status bubble" />
          <Title>{name}</Title>
        </Header>
        <DescriptionContainer>
          <DescriptionTitle>Description</DescriptionTitle>
          <Description>{description}</Description>
        </DescriptionContainer>
        <ButtonContainer>
          <ButtonsContainer>
            <CreateButton buttonTitle={"Add task"} />
            <Search />
            <DownloadIcon src={downloadIcon} alt="Download" />
          </ButtonsContainer>
        </ButtonContainer>
        <ColumnsContainer>
          <TaskColumnWrapper>
            <TaskColumn title="To Do" tasks={tasksToDo} />
          </TaskColumnWrapper>
          <TaskColumnWrapper>
            <TaskColumn title="In progress" tasks={tasksInProgress} />
          </TaskColumnWrapper>
          <TaskColumnWrapper>
            <TaskColumn title="Done" tasks={tasksDone} />
          </TaskColumnWrapper>
        </ColumnsContainer>
      </ProjectPageContainer>

      {/* {deleteModalIemId && (
        <DeleteModal
          projectId={deleteModalIemId}
          onClose={() => setDeleteModalId(null)}
        />
      )} */}
    </>
  );
}

export default ProjectPage;
