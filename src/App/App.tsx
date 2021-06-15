import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  clearBooks, getBooksAsync, selectBooks, selectStatus,
} from '../store/slices/BooksSlice/BooksSlice';
import debounce from '../common/debounce';
import {
  SearchContainer, SearchInput, Wrapper, Spinner,
} from './styles';

const SpinnerGif = require('../../public/assets/spinner.gif');

const DEBOUNCE_DELAY = 1000;

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState('');
  const books = useAppSelector(selectBooks);
  const isBooksLoading = useAppSelector(selectStatus) === 'loading';

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
        <div>{inputValue}</div>
      </SearchContainer>
      {books.map((book, index) => <div key={index.toString()}>{book.title}</div>)}
    </Wrapper>
  );
};

export default App;
