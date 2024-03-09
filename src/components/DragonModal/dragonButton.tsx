import React, {ReactNode} from 'react';
import { useModal } from '../../context/modal';
import { useTransform } from '../../context/transform';
// import './OpenModalButton.css'
type OpenDragonModalProps = {
    modalComponent: ReactNode;
    buttonText: string;
    onButtonClick?: () => void;
    onModalClose?: () => void;
    buttonClassName: string;
}
function OpenDragonModal({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
  buttonClassName
}: OpenDragonModalProps) {
  const { setModalContent, setOnModalClose } = useModal();
  const { transform, setTransform, setStart, setWizard, setKnight, setScroll, setChest, setDragon } = useTransform()

  const onClick = () => {
    const newTransform = {
      x: -40,
      y: 450,
    };
    setTransform(newTransform);
    setDragon("hide")
    if (onModalClose) setOnModalClose(onModalClose);
    if (transform.x === -40 && transform.y ===450){
        setModalContent(modalComponent);
    } else {
      setStart("hide");
      setWizard("hide");
      setScroll("hide");
      setKnight("hide");
      setChest("hide");
      setTimeout(()=> {
          setModalContent(modalComponent);
        },1200)
    }

    if (onButtonClick) onButtonClick();
  };

  return (
      <button className={`modal-button-${buttonClassName}`} onClick={onClick}>
        <img className='dragon' src={process.env.PUBLIC_URL + '/dragon.png'}/>
        <div className='button-text'>{buttonText}</div>
      </button>

  );
}

export default OpenDragonModal;
