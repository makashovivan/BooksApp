import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { fetchBooks } from '../../../common/API';
import {
  BookDTO, BooksDTO, BooksState, FetchStatusType,
} from './types';

const initialState: BooksState = {
  books: [],
  status: 'idle',
};

export const getBooksAsync = createAsyncThunk(
  'books/fetchBooks',
  async (value: string) => {
    if (!value) return { docs: [] };
    value = value.replace(/\s+/g, '+');
    const books = await fetchBooks<BooksDTO>(value, 5);
    return books;
  },
);

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    clearBooks: (state) => {
      state.books = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooksAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooksAsync.fulfilled, (state, action: PayloadAction<BooksDTO>) => {
        state.status = 'idle';
        state.books = action.payload.docs || [];
      })
      .addCase(getBooksAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { clearBooks } = booksSlice.actions;

export const selectBooks = (state: RootState): BookDTO[] => state.books.books;

export const selectStatus = (state: RootState): FetchStatusType => state.books.status;

export default booksSlice.reducer;
