export interface BooksState {
  books: BookDTO[];
  status: FetchStatusType;
}

export type FetchStatusType = 'idle' | 'loading' | 'failed';

export type BooksDTO = {
  docs: BookDTO[]
};

export type BookDTO = {
  first_publish_year: number
  title: string
  author_name: string[],
  cover_i: number,
  publisher: string[],
  isbn: string[]
};
