import React, { ReactNode } from 'react';
import { useModal } from '../../context/modal';
import { useTransform } from '../../context/transform';

type OpenKnightModalProps = {
    modalComponent: ReactNode;
    buttonText: string;
    onButtonClick?: () => void;
    onModalClose?: () => void;
    buttonClassName: string;
}
// import './OpenModalButton.css'
function OpenKnightModal({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
  buttonClassName
}: OpenKnightModalProps) {
  const { setModalContent, setOnModalClose } = useModal();
  const { transform, setTransform, setStart, setWizard, setKnight, setScroll, setChest, setDragon } = useTransform()

  const onClick = () => {
    const newTransform = {
      x: 20,
      y: 650,
    };
    setTransform(newTransform);
    setKnight("hide")
    if (onModalClose) setOnModalClose(onModalClose);
    if (transform.x === 20 && transform.y ===650){
        setModalContent(modalComponent);
    } else {
      setStart("hide");
      setWizard("hide");
      setScroll("hide");
      setDragon("hide");
      setChest("hide");
      setTimeout(()=> {
          setModalContent(modalComponent);
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
