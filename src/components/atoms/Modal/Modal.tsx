import { useTypedSelector, useTypedDispatch } from 'hooks/useTypedRedux';
import React from 'react';
import { setModal } from 'store/modal.slice';
import StyledModal from './Modal.styled';

const Modal: React.FC = () => {
  const { data } = useTypedSelector((state) => state.modal);

  const dispatch = useTypedDispatch();

  const handleClose = () => dispatch(setModal({ isAcitve: false, data }));

  return (
    <StyledModal>
      <div className="modal-content">
        <ul className="modal-list">
          {Object.entries(data).map((item) => (
            <li className="modal-item" key={item[0]}>
              <span className="modal-item-label">{item[0]}</span>
              <span className="modal-item-value">{item[1]}</span>
            </li>
          ))}
        </ul>
        <button type="button" className="modal-close-btn" onClick={handleClose}>
          Close
        </button>
      </div>
    </StyledModal>
  );
};

export default Modal;
