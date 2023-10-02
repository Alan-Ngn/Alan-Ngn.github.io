import React from 'react';
import { useModal } from '../../context/modal';
import { useTransform } from '../../context/transform';
// import './OpenModalButton.css'
function OpenChestModal({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
  buttonClassName
}) {
  const { setModalContent, setOnModalClose } = useModal();
  const { transform, setTransform, setStart } = useTransform()

  const onClick = () => {
    const newTransform = {
      x: 0,
      y: 360,
    };
    setTransform(newTransform);

    if (onModalClose) setOnModalClose(onModalClose);
    if (transform.x === 10 && transform.y ===50){
        setModalContent(modalComponent);
        setStart("hide");
    } else {
        setTimeout(()=> {
            setModalContent(modalComponent);
            setStart("hide");
          },1000)
    }

    if (onButtonClick) onButtonClick();
  };

  return (
      <button className={`modal-button-${buttonClassName}`} onClick={onClick}>
        <img className='chest' src={process.env.PUBLIC_URL + '/chest.png'}/>
        <div className='button-text'>{buttonText}</div>
      </button>

  );
}

export default OpenChestModal;
