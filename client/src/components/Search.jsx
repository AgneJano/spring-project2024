import { useState } from 'react';
import { styled } from 'styled-components';
import searchIcon from '../assets/icons/search.svg';

const Container = styled.div`
  position: relative;
`

const StyledInput = styled.input`
  border: 1px solid #DDDDDD;
  border-radius: 0.25rem;
  padding: 0.563rem 0.938rem 0.563rem 3rem;
  max-width: 15.625rem;
  width: 100%;
  font-size:1rem;
  &::placeholder {
    color: #d9d9d9;
    font-size:1rem;
  }
  &:focus {
    border-color: #000; /* Change to your desired color */
    outline: none; /* Remove default outline */
  }
`

const StyledIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 1.2rem;
  transform: translateY(-50%);
  z-index: 4;
`

const Search = ({ searchFrom, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    // const filteredData = searchFrom.filter(item => {
    //   const { name, description, status } = item;
    //   const searchText = `${name.toLowerCase()} ${description.toLowerCase()} ${status.toLowerCase()}`;
    //   return searchText.includes(inputValue.toLowerCase());
    // });

    // onSearch(filteredData);
  };

  return (
    <Container>
      <StyledInput
        type="text"
        placeholder={`Search`}
        value={query}
        onChange={handleInputChange}
      />
      <StyledIcon src={searchIcon} />
    </Container>
  );
};

export default Search;
