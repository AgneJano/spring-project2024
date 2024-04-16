import { useState } from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  position: relative;
  max-width: 15.625rem;
  width: 100%;
`

const StyledSelect = styled.select`
border: 1px solid #DDDDDD;
border-radius: 0.25rem;
padding: 0.563rem 0.938rem;
font-size: 1rem;
max-width: 15.625rem;
width: 100%;
  
  background-position: right 0.5rem center;
  &::placeholder {
    color: #d9d9d9;
    font-size:1rem;
  }
  &:focus {
    border-color: #000; /* Change to your desired color */
    outline: none; /* Remove default outline */
  }
`

const Filter = ({ filterElement, onSearch }) => {
    let statuses;
    if (filterElement === 'projects'){
        statuses = ['in-progress', 'done'];
    } 
    if (filterElement === 'tasks'){
        statuses = ['to-do', 'in-progress', 'done'];
    }

    let formattedStatuses = statuses.map(status => {
        return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase().replace('-', ' ');
    });

console.log(formattedStatuses)

//   const [query, setQuery] = useState('');

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSearch = () => {
//     onSearch(query);
//   };

  return (
    <Container>
      <StyledSelect>
      <option value="" selected>Filter</option>
      {formattedStatuses?.map((label, index) => (
        <option key={index} value={statuses[index]}>{label}</option>
    ))}
      </StyledSelect>
    </Container>
  );
};

export default Filter;
