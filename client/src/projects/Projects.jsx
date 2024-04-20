import { useState, useContext, useMemo } from "react";
import { ProjectCard } from "./ProjectCard";
import { styled } from "styled-components";
import { useFetch } from "../fetching-data/UseFetch";
import SyncLoader from "react-spinners/SyncLoader";
import Search from "../components/Search";
import CreateButton from "../components/CreateButton";
import Filter from "../components/Filter";
import { AuthContext } from "../utils/AuthContext";
import { DeleteModal } from "../components/DeleteModal";

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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 1rem;
`;

const PaginationButton = styled.button`
  width: 150px;
  height: 50px;
  padding: 10px;
  background-color: #ffc107;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #b38600;
  }
`;

export const Projects = () => {
  const { data, loading } = useFetch(
    useMemo(() => "https://api.jsonbin.io/v3/b/661eb81fe41b4d34e4e55765", []),
  );
  const { user } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Change as needed
  const [deleteModalIemId, setDeleteModalItemId] = useState(null);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = data?.record?.projects.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
          currentProjects.map((project, i) => (
            <ProjectCard
              key={`projectCard${i}`}
              {...project}
              isVisibleDelete={user.role === "admin" ? true : false}
              onDeleteModalOpen={() => setDeleteModalItemId(project.id)}
            />
          ))
        )}
      </CardsContainer>

      {data.length > 12 && (
        <PaginationContainer>
          <PaginationButton
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </PaginationButton>
          <PaginationButton
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastItem >= data?.record?.projects.length}
          >
            Next
          </PaginationButton>
        </PaginationContainer>
      )}

      {deleteModalIemId && (
        <DeleteModal
          projectId={deleteModalIemId}
          onClose={() => setDeleteModalItemId(null)}
        />
      )}
    </>
  );
};
