import React from "react";


const contentStyle = { background: '#000' };
const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
const arrowStyle = { color: '#000' }; // style for an svg element

const Modal = () => (
  <Popup
    trigger={<button className="button"> Open Modal </button>}
    {...{ modal, closeOnDocumentClick, contentStyle, overlayStyle, arrowStyle }}
  >
    <span> Modal content </span>
  </Popup>
);
export default Modal;