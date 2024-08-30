import React from 'react';

const ChatPopup = () => {
  // Handle close button click
  const handleClose = () => {
    // Logic to close the chat popup
  };

  return (
    <div className="chat-popup">
      {/* Chat content */}
      <button className="close-button" onClick={handleClose}>
        Close
      </button>
    </div>
  );
};

export default ChatPopup;
