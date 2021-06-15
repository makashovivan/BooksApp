import styled from 'styled-components';

export const BookListItemContainer = styled.div`
  padding: 1.4rem 2rem;
  font-size: 1.3rem;
  display: flex;
  flex-direction: row;
  background-color: #1b2336;
  color: #BFD2FF;
`;

export const CoverContainer = styled.div`
  min-width: 58px;
  margin-right: 20px;
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: nowrap;
  overflow: hidden;
`;

export const BookTitle = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  padding-bottom: 10px;
  font-size: 1.8rem;
  font-weight: 600;
`;
export const AuthorName = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 1.2rem;
  font-weight: 300;
`;
