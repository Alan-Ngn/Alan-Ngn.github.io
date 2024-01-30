import React, { ReactNode } from 'react';
import { useModal } from '../../context/modal';
import { useTransform } from '../../context/transform.js';
// import './OpenModalButton.css'
type OpenScrollModalProps = {
    modalComponent: ReactNode;
    buttonText: string;
    onButtonClick?: () => void;
    onModalClose?: () => void;
    buttonClassName: string;
}
function OpenScrollModal({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
  buttonClassName
}: OpenScrollModalProps) {
  const { setModalContent, setOnModalClose } = useModal();
  const { transform, setTransform, setStart, setWizard, setKnight, setScroll, setChest, setDragon } = useTransform()

  const onClick = () => {
    const newTransform = {
      x: 0,
      y: 900,
    };
    setTransform(newTransform);
    setScroll("hide")
    if (onModalClose) setOnModalClose(onModalClose);
    if (transform.x === 0 && transform.y ===900){
        setModalContent(modalComponent);
    } else {
      setStart("hide");
      setWizard("hide");
      setKnight("hide");
      setDragon("hide");
      setChest("hide")
      setTimeout(()=> {
          setModalContent(modalComponent);
        },1200)
    }

    if (onButtonClick) onButtonClick();
  };

  return (
      <button className={`modal-button-${buttonClassName}`} onClick={onClick}>
        <img className='scroll' src={process.env.PUBLIC_URL + '/scroll.png'}/>
        <div className='button-text'>{buttonText}</div>
      </button>

  );
}

export default OpenScrollModal;
