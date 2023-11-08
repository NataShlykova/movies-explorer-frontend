import Popup from '../Popup/Popup';

function InfoTooltip({ isOpen, setPopupOpened, notification }) {
  return (
    <Popup name='note' isOpen={isOpen} setPopupOpened={setPopupOpened}>
      <h2 className='popup__title'>{notification}</h2>
    </Popup>
  );
};
export default InfoTooltip;
