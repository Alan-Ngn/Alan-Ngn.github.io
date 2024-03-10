import React, { ReactNode } from 'react';
import { useModal } from '../../context/modal';
import { useTransform } from '../../context/transform';
// import './OpenModalButton.css'
type OpenSnowGlobeModalProps = {
    modalComponent: ReactNode;
    buttonText: string;
    onButtonClick?: () => void;
    onModalClose?: () => void;
    buttonClassName: string;
}
function OpenSnowGlobeModal({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
  buttonClassName
}: OpenSnowGlobeModalProps) {
  const { setModalContent, setOnModalClose } = useModal();
  const { transform, setTransform, setStart, setWizard, setKnight, setScroll, setChest, setDragon, setGlobe } = useTransform()

  const onClick = () => {
    const newTransform = {
      x: 190,
      y: 910,
    };
    setTransform(newTransform);
    setGlobe("hide")
    if (onModalClose) setOnModalClose(onModalClose);
    if (transform.x === 190 && transform.y ===910){
        setModalContent(modalComponent);
    } else {
      setStart("hide");
      setChest("hide");
      setScroll("hide");
      setKnight("hide");
      setDragon("hide");
      setWizard("hide")
      setTimeout(()=> {
          setModalContent(modalComponent);
        },1200)
    }

    if (onButtonClick) onButtonClick();
  };

  return (
      <button className={`modal-button-${buttonClassName}`} onClick={onClick}>
        <img  className='snow' src={process.env.PUBLIC_URL + '/snowglobe.png'}/>
        <div className='button-text'>{buttonText}</div>
      </button>

  );
}

export default OpenSnowGlobeModal;
