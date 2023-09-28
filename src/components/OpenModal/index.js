import React from 'react';
import { useModal } from '../../context/modal';
// import './OpenModalButton.css'
function OpenModalButton({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
  buttonClassName
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (onButtonClick) onButtonClick();
  };

  return (
      <button className={`modal-button-${buttonClassName}`} onClick={onClick}>
          {/* {buttonText==='Delete' ? <i class="fa-solid fa-trash"></i> : buttonText==='Edit Channel' ? <i class="fa-solid fa-hammer"></i> : buttonText ==='Add channels' ? */}
          <img  className='dragon' src={process.env.PUBLIC_URL + '/dragon.png'}/>
          <img  className='wizard' src={process.env.PUBLIC_URL + '/wizard.png'}/>
          <img  className='knight' src={process.env.PUBLIC_URL + '/knight.png'}/>
            <div className='button-text'>{buttonText}</div>


      </button>

  );
}

export default OpenModalButton;
