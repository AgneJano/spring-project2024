import { ProjectCard } from "./ProjectCard";
import { styled } from "styled-components";
import { useFetch } from "../fetching-data/UseFetch";
import SyncLoader from "react-spinners/SyncLoader";
import Search from "../components/Search";
import CreateButton from "../components/CreateButton";
import Filter from "../components/Filter";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  max-width: 77.5rem;
  margin: 1.875rem auto 0;
  justify-content: center;
  @media (max-width: 48em) {
    padding: 0 1rem;
  }
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  padding: 4rem 0 1.25rem;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; /* Or adjust to your preference */
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

export const Projects = () => {
  const { data, loading } = useFetch(
    "https://api.jsonbin.io/v3/b/661eb81fe41b4d34e4e55765",
  );

  return (
    <>
      <Title>Projects</Title>
      <ButtonsContainer>
        <CreateButton buttonTitle={"Add project"} />
        <Search />
        <Filter filterElement="projects" />
      </ButtonsContainer>

      <CardsContainer>
        {loading ? (
          <LoadingContainer>
            <SyncLoader color={"#FFC107"} loading={loading} size={20} />
          </LoadingContainer>
        ) : (
          data.record.projects.map((project, i) => (
            <ProjectCard key={`projectCard${i}`} {...project} />
          ))
        )}
      </CardsContainer>
    </>
  );
};
