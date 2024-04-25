// import { useState, useContext, useMemo, useEffect } from "react";
// import { ProjectCard } from "./ProjectCard";
// import { styled } from "styled-components";
// import { useFetch } from "../fetching-data/UseFetch";
// import SyncLoader from "react-spinners/SyncLoader";
// import Search from "../components/Search";
// import CreateButton from "../components/CreateButton";
// import Filter from "../components/Filter";
// import { AuthContext } from "../utils/AuthContext";
// import { DeleteModal } from "../components/DeleteModal";
// import axios from "axios";
// import downloadIcon from "../assets/download.svg";
// import { CSVLink } from "react-csv";
// import { useNavigate } from "react-router-dom";

// const CardsContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 1.25rem;
//   max-width: 77.5rem;
//   margin: 1.875rem auto 0;
//   justify-content: center;
//   @media (max-width: 48em) {
//     padding: 0 1rem;
//   }
// `;

// const Title = styled.p`
//   font-size: 2rem;
//   font-weight: 500;
//   text-align: center;
//   padding: 4rem 0 1.25rem;
// `;

// const LoadingContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 200px;
// `;

// const ButtonsContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.625rem;
//   max-width: 77.5rem;
//   margin: 0 auto;
//   @media (max-width: 48em) {
//     flex-direction: column;
//     align-items: center;
//     padding: 0 1rem;
//   }
// `;

// const PaginationContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 2rem;
//   gap: 1rem;
// `;

// const PaginationButton = styled.button`
//   width: 150px;
//   height: 50px;
//   padding: 10px;
//   background-color: #ffc107;
//   color: #ffffff;
//   font-weight: 600;
//   font-size: 16px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   margin-top: 30px;

//   &:hover {
//     background-color: #b38600;
//   }
// `;

// const DownloadIcon = styled.img`
//   width: 30px;
//   height: 30px;
//   cursor: pointer;
//   &:hover {
//     filter: brightness(0.5);
//     transform: scale(0.9);
//   }
// `;

// export const Projects = () => {
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(12);
//   const [deleteModalItemId, setDeleteModalItemId] = useState(null);
//   const [selectedStatus, setSelectedStatus] = useState("");
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;

//   const { data, loading, refetch } = useFetch(
//     useMemo(
//       () =>
//         `http://localhost:1000/api/v1/planpro/projects${selectedStatus !== "" ? "?status=" + selectedStatus : ""}`,
//       [selectedStatus],
//     ),
//   );
//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     refetch(
//       `http://localhost:1000/api/v1/planpro/projects?page=${pageNumber}&limit=${itemsPerPage}${selectedStatus !== "" ? "&status=" + selectedStatus : ""}`,
//     );
//   };

//   useEffect(() => {
//     if (data.length < 12) {
//       setCurrentPage(1);
//     }
//   }, [data]);

//   const currentProjects = data?.slice(indexOfFirstItem, indexOfLastItem);

//   const deleteProject = async () => {
//     try {
//       await axios.delete(
//         `http://localhost:1000/api/v1/planpro/projects/${deleteModalItemId}`,
//       );
//       refetch();
//     } catch (error) {
//       console.error("Error deleting project:", error);
//     }
//   };
//   const handleFilterChange = (selectedStatus) => {
//     setSelectedStatus(selectedStatus);
//   };
//   const headers = [
//     { label: "Project ID", key: "id" },
//     { label: "Project Name", key: "name" },
//     { label: "Description", key: "description" },
//     { label: "Status", key: "status" },
//   ];
//   console.log(data);
//   return (
//     <>
//       <Title>Projects</Title>
//       <ButtonsContainer>
//         <CreateButton
//           buttonTitle="Add project"
//           onClick={() => navigate("/create-task")}
//         />
//         <Search />
//         <Filter filterElement="tasks" onFilterChange={handleFilterChange} />
//         <CSVLink data={data} headers={headers} filename="tasks.csv">
//           <DownloadIcon src={downloadIcon} alt="Download" />
//         </CSVLink>
//       </ButtonsContainer>

//       {/* <CardsContainer>
//         {loading ? (
//           <LoadingContainer>
//             <SyncLoader color={"#FFC107"} loading={loading} size={20} />
//           </LoadingContainer>
//         ) : (
//           currentProjects?.map((project, i) => (
//             <ProjectCard
//               key={`projectCard${i}`}
//               {...project}
//               isVisibleDelete={user.role === "admin" ? true : false}
//               onDeleteModalOpen={() => setDeleteModalItemId(project.id)}
//             />
//           ))
//         )}
//       </CardsContainer> */}

//       {data.length > 12 && (
//         <PaginationContainer>
//           {currentPage !== 1 && (
//             <PaginationButton
//               onClick={() => paginate(currentPage - 1)}
//               disabled={currentPage === 1}
//             >
//               Previous
//             </PaginationButton>
//           )}
//           {indexOfLastItem < data?.length && (
//             <PaginationButton
//               onClick={() => paginate(currentPage + 1)}
//               disabled={indexOfLastItem >= data?.record?.projects.length}
//             >
//               Next
//             </PaginationButton>
//           )}
//         </PaginationContainer>
//       )}

//       {/* {deleteModalItemId && (
//         <DeleteModal
//           projectId={deleteModalItemId}
//           onClose={() => setDeleteModalItemId(null)}
//           onDelete={() => deleteProject(deleteModalItemId)}
//         />
//       )} */}
//     </>
//   );
// };
