import React, { useState } from 'react';
import { getCoverUrl } from '../../common/API';
import {
  BookListItemContainer, CoverContainer, BookInfo, BookTitle, AuthorName,
} from './styles';
import { IBookListItemProps } from './types';
import ModalWindow from '../../common/components/ModalWindow';
import BookFullInfo from '../BookFullInfo';

const BookCoverPlaceholder = require('../../../public/assets/book-cover-placeholder.png');

const BookListItem: React.FC<IBookListItemProps> = ({ book }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const authorsString = book.author_name ? book.author_name.join(', ') : '';
  return (
    <>
      <BookListItemContainer onClick={() => { setIsModalOpen(true); }}>
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
      {
        isModalOpen
        && (
        <ModalWindow closeHandler={() => { setIsModalOpen(false); }}>
          <BookFullInfo book={book} />
        </ModalWindow>
        )
      }
    </>
  );
};

export default BookListItem;
