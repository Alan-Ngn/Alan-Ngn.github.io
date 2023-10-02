import React from 'react';
import { useModal } from '../../context/modal';
import { useTransform } from '../../context/transform';
// import './OpenModalButton.css'
function OpenKnightModal({
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
      x: 20,
      y: 650,
    };
    setTransform(newTransform);

    if (onModalClose) setOnModalClose(onModalClose);
    if (transform.x === 20 && transform.y ===650){
        setModalContent(modalComponent);
        setStart("hide");
    } else {
        setTimeout(()=> {
            setModalContent(modalComponent);
            setStart("hide");
          },1200)
    }

    if (onButtonClick) onButtonClick();
  };

  return (
      <button className={`modal-button-${buttonClassName}`} onClick={onClick}>
        <img className='knight' src={process.env.PUBLIC_URL + '/knight.png'}/>
        <div className='button-text'>{buttonText}</div>
      </button>

  );
}

export default OpenKnightModal;
