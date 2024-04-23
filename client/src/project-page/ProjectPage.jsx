import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import TaskColumn from "../components/TaskColumn";
import tasksData from "../data/tasks.json";
import downloadIcon from "../assets/download.svg";
import Search from "../components/Search";
import CreateButton from "../components/CreateButton";
import { getStatusSvgUrl } from "../mainFunctions";
import { useMemo } from "react";
import { useFetch } from "../fetching-data/UseFetch";
import { useNavigate } from "react-router-dom";

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
    align-items: center;
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

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

function ProjectPage() {
  const { id } = useParams();

  const { data, loading } = useFetch(
    useMemo(() => `http://localhost:1000/api/v1/planpro/projects/${id}`, []),
  );

  const navigate = useNavigate();
  const tasksToDo = tasksData.filter((task) => task.status === "to-do");
  const tasksInProgress = tasksData.filter(
    (task) => task.status === "in-progress",
  );
  const tasksDone = tasksData.filter((task) => task.status === "done");
  const url = getStatusSvgUrl(data?.status);

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <SyncLoader color={"#FFC107"} loading={loading} size={20} />
        </LoadingContainer>
      ) : (
        <ProjectPageContainer>
          <Header>
            <StatusBubble src={url} alt="Project status bubble" />
            <Title>{data?.name}</Title>
          </Header>
          {data?.description && (
            <DescriptionContainer>
              <DescriptionTitle>Description</DescriptionTitle>
              <Description>{data?.description}</Description>
            </DescriptionContainer>
          )}
          <ButtonContainer>
            <ButtonsContainer>
              <CreateButton buttonTitle="Add task"
                onClick={() => navigate(`/projects/${id}/create-task`)} />
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
      )}
    </>
  );
}

export default ProjectPage;
