import styled from 'styled-components';

const SHEET_BACKGROUND = 'rgba(0, 0, 0, 0.8)';

export const SheetHeader = styled.div`
  height: 40px;
  border-radius: 13px 13px 0px 0px;
  border-top: 1px solid white;
  background-color: ${SHEET_BACKGROUND};
  text-align: center;
`;

export const BottomSheet = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const ArrowContainer = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
`;
export const BookInfoContainer = styled.div`
  color: #BFD2FF;
  font-size: 1.4rem;
  padding: 1rem;
  background-color: ${SHEET_BACKGROUND};
`;
