import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 15px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 400px;
  padding: 1.4rem 2rem;
  margin-top: 30px;
  background: rgba(57, 63, 84, 0.8);
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  color: #BFD2FF;
  font-size: 1.8rem;
  line-height: 2.4rem;
  vertical-align: middle;
  border-style: none;
  background: transparent;
  outline: none;
`;

export const Spinner = styled.img`
  width: 26px;
  height: 26px;
`;

export const BooksList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  list-style-type: none;
  text-align: left;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
  background-color: aliceblue;
`;
