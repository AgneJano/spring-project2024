import { styled } from "styled-components";
import { getStatusSvgUrl } from "../mainFunctions";
import deleteIcon from "../assets/icons/delete.svg";
import editIcon from "../assets/icons/edit.svg";
import axios from "axios";

const Container = styled.div`
  border: 1px solid #dddddd;
  border-radius: 0.25rem;
  max-width: 25rem;
  height: 17.5rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 48em) {
  }
`;
const StatusBubble = styled.img`
  height: 1.375rem;
  width: 1.375rem;
`;

const Header = styled.div`
  display: flex;
  gap: 0.625rem;
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
  font-size: 0.9rem;
  line-height: 1.25rem;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.313rem;
  max-height: 9.375rem;
  height: 100%;
`;

const TaskInfo = styled.p`
  font-size: 1rem;
  color: #c7c6c6;
`;

const TaskContainer = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const ProjectCard = ({
  id,
  name,
  description,
  status,
  tasksLeft,
  tasks,
}) => {
  const url = getStatusSvgUrl(status);

  const onDeleteClick = async (projectId) => {
    // const url = "https://api.jsonbin.io/v3/b/661eb81fe41b4d34e4e55765";
    // try {
    //   const response = await axios.delete(url, {
    //     headers: {
    //       "X-Master-Key":
    //         "$2a$10$ep7mKSMiDETvfKp/AyhAEez73Ll2iqMLhJoQ3ze8q/En5oV69kXdC",
    //       id: projectId,
    //     },
    //   });
    //   if (response.status === 200) {
    //     console.log(`Project with ID ${projectId} deleted successfully`);
    //     return true;
    //   } else {
    //     console.error(`Failed to delete project with ID ${projectId}`);
    //     return false;
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    //   return false;
    // }
  };
  const truncateDescription = (description) => {
    if (description.length <= 255) {
      return description;
    } else {
      const lastSpaceIndex = description.lastIndexOf(" ", 255);
      return description.substring(0, lastSpaceIndex).trim() + "...";
    }
  };
  return (
    <Container>
      <Header>
        <StatusBubble src={url} alt="Project status bubble" />
        <Title>{name}</Title>
      </Header>
      <DescriptionContainer>
        <DescriptionTitle>Description</DescriptionTitle>
        {/* TO DO: max simboliu su tarpais 255, reiks kazkaip trimint desc jeigu bus ilgenis */}
        <Description>{truncateDescription(description)}</Description>
      </DescriptionContainer>
      <TaskContainer>
        <TaskInfo>
          Tasks left: {tasksLeft}/{tasks}
        </TaskInfo>
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
      </TaskContainer>
    </Container>
  );
};
