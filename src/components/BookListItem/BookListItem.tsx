import React from 'react';
import { getCoverUrl } from '../../common/API';
import {
  BookListItemContainer, CoverContainer, BookInfo, BookTitle, AuthorName,
} from './styles';
import { IBookListItemProps } from './types';

const BookCoverPlaceholder = require('../../../public/assets/book-cover-placeholder.png');

const BookListItem: React.FC<IBookListItemProps> = ({ book }) => {
  const authorsString = book.author_name ? book.author_name.join(', ') : '';
  return (
    <>
      <BookListItemContainer>
        <CoverContainer>
          {book.cover_i
            ? <img src={getCoverUrl(book.cover_i, 'S')} alt="cover" style={{ maxWidth: '100%' }} />
            : <img src={BookCoverPlaceholder.default} alt="cover placeholder" style={{ width: 40 }} />}
        </CoverContainer>
        <BookInfo>
          <BookTitle title={book.title}>{book.title}</BookTitle>
          <AuthorName title={authorsString}>{authorsString}</AuthorName>
        </BookInfo>
      </BookListItemContainer>
    </>
  );
};

export default BookListItem;
