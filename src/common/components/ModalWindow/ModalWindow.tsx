import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { WindowOverlay, WindowContainer } from './styles';
import { IModalWindowProps } from './types';

const ModalWindow: React.FC<IModalWindowProps> = ({ children, closeHandler }) => {
  const el: HTMLDivElement = document.createElement('div');
  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, []);
  return (
    ReactDOM.createPortal(
      <WindowOverlay onClick={closeHandler}>
        <WindowContainer onClick={(e) => e.stopPropagation()}>
          {children}
        </WindowContainer>
      </WindowOverlay>,
      el,
    )
  );
};

export default ModalWindow;
