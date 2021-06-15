import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  clearBooks, getBooksAsync, selectBooks, selectStatus,
} from '../store/slices/BooksSlice/BooksSlice';
import BookListItem from '../components/BookListItem';
import debounce from '../common/debounce';
import {
  SearchContainer, SearchInput, Wrapper, Spinner, BooksList,
} from './styles';

const SpinnerGif = require('../../public/assets/spinner.gif');

const DEBOUNCE_DELAY = 1000;

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState('');
  const books = useAppSelector(selectBooks);
  const isBooksLoading = useAppSelector(selectStatus) === 'loading';
  const isNotFound = !!inputValue.length && !isBooksLoading && (books.length === 0);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    dispatch(clearBooks());
    dispatch(getBooksAsync(event.target.value));
  };

  const onInputChangeDebounced = debounce(onInputChange, DEBOUNCE_DELAY);

  return (
    <Wrapper>
      <SearchContainer>
        <SearchInput
          type="text"
          onChange={onInputChangeDebounced}
          placeholder="Book title"
        />
        {isBooksLoading && <Spinner src={SpinnerGif.default} alt="spinner" />}
        <BooksList>
          {isNotFound && <div>Books not found</div>}
          {books.map((book, index) => <BookListItem book={book} key={index.toString()} />)}
        </BooksList>
      </SearchContainer>
    </Wrapper>
  );
};

export default App;
