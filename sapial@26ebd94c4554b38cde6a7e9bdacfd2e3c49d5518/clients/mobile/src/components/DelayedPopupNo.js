import React, { useState, useEffect } from 'react';

function DelayedPopupNo() {
  const [showPopup, setShowPopup] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleClick = () => {
    setIsButtonDisabled(true);
    setTimeout(() => {
      setShowPopup(true);
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setShowPopup(false);
          setFadeOut(false);
          setIsButtonDisabled(false);
        }, 1000);  // Remove popup after fade out
      }, 1000);  // Start fade out after 1 second
    }, 5000);  // Show popup after 5 seconds
  };

  return (
    <div>
      <img 
        src="/img/vote_no.png" 
        alt="Vote" 
        onClick={handleClick} 
        style={{ pointerEvents: isButtonDisabled ? 'none' : 'auto', opacity: isButtonDisabled ? 0.5 : 1 }}
      />
      {showPopup && (
        <div className={`popup ${fadeOut ? 'popup-fade-out' : ''}`}>
          <div className="popup-text">Voted NO</div>
        </div>
      )}
    </div>
  );
}

export default DelayedPopupNo;
