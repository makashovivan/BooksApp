import React from 'react';

export interface ISheetArrowProps {
  isSheetOpen: boolean
  color: string
}

const SheetArrow: React.FC<ISheetArrowProps> = ({ isSheetOpen, color }) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d={isSheetOpen ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
      fill={color}
    />
  </svg>
);

export default SheetArrow;
