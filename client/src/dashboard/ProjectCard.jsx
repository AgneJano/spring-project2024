import { styled } from 'styled-components';
import { getStatusSvgUrl } from '../mainFunctions';
import deleteIcon from '../assets/icons/delete.svg';
import editIcon from '../assets/icons/edit.svg';


const Container = styled.div`
    border: 1px solid #DDDDDD;
    border-radius: 0.25rem;
    max-width: 25rem;
    height: 17.5rem;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (max-width: 48em){
    }
`
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

const TaskInfo = styled.p`
    font-size: 1rem;
    color: #C7C6C6;
`

const TaskContainer = styled.p`
    display: flex;
    align-items: center;
    justify-content: space-between
`

const ImageContainer = styled.p`
    display: flex;
    gap: 0.5rem;
`
const StyledIcon = styled.img`
    &:hover {
        filter: brightness(0.5);
        transform: scale(0.9);
    }
`

export const ProjectCard = ({name, description, status, tasksLeft, totalTasks})=> {
    const url = getStatusSvgUrl(status);
    return (
        <Container>
            <Header>
                <StatusBubble src={url} alt="Project status bubble" />
                <Title>{name}</Title>
            </Header>
            <DescriptionContainer>
                <DescriptionTitle>Description</DescriptionTitle>
                {/* TO DO: max simboliu su tarpais 255, reiks kazkaip trimint desc jeigu bus ilgenis */}
                <Description>{description}</Description>
            </DescriptionContainer>
            <TaskContainer>
                <TaskInfo>Tasks left: {tasksLeft}/{totalTasks}</TaskInfo>
                <ImageContainer>
                    {/* TO DO: funkcionalas */}
                    <StyledIcon src={editIcon} />
                    <StyledIcon src={deleteIcon} />  
                </ImageContainer>
            </TaskContainer>
        </Container>
      );
  }
