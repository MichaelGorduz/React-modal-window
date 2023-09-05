import React, { useEffect } from 'react';
import './Modal.scss';

const Modal = ({ header, closeButton, text, actions, onClose }) => {
    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    // Add an event listener to the modal overlay
    useEffect(() => {
        const handleOverlayClick = (event) => {
            if (event.target.classList.contains('modal-overlay')) {
                handleClose(); // Close the modal when clicking outside its content
            }
        };

        window.addEventListener('click', handleOverlayClick);

        return () => {
            window.removeEventListener('click', handleOverlayClick);
        };
    });

    return (
        <div className="modal-overlay">
            <div className="modal">
                {closeButton && <span className="close-button" onClick={handleClose}>&times;</span>}
                <h2 className="modal-header">{header}</h2>
                <p className="modal-text">{text}</p>
                <div className="modal-actions">{actions}</div>
            </div>
        </div>
    );

};

export default Modal;