import React, { useState } from 'react';
import { getCoverUrl } from '../../common/API';
import { IBookFullInfoProps } from './types';
import {
  SheetHeader, BottomSheet, ArrowContainer, BookInfoContainer,
} from './styles';
import SheetArrow from './components/SheetArrow';

const BookCoverPlaceholder = require('../../../public/assets/book-cover-placeholder.png');

const BookFullInfo: React.FC<IBookFullInfoProps> = ({ book }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const publisher = book.publisher && book.publisher.length ? book.publisher[0] : '';
  const firstPublishYear = book.first_publish_year || null;
  const isbn = book.isbn && book.isbn.length ? book.isbn[0] : null;
  return (
    <div>
      {book.cover_i
        ? <img src={getCoverUrl(book.cover_i, 'L')} alt="cover" style={{ maxWidth: '100%' }} />
        : <img src={BookCoverPlaceholder.default} alt="cover" />}
      <BottomSheet>
        <SheetHeader onClick={() => setIsSheetOpen((isOpen) => !isOpen)}>
          <ArrowContainer>
            <SheetArrow color="white" isSheetOpen={isSheetOpen} />
          </ArrowContainer>
        </SheetHeader>
        {isSheetOpen
            && (
            <BookInfoContainer>
              {publisher && (
              <div>
                {'Publisher: '}
                {publisher}
              </div>
              )}
              {firstPublishYear && (
              <div>
                {'Publish year: '}
                {firstPublishYear}
              </div>
              )}
              {isbn && (
              <div>
                {'ISBN: '}
                {isbn}
              </div>
              )}
            </BookInfoContainer>
            )}
      </BottomSheet>
    </div>
  );
};

export default BookFullInfo;
