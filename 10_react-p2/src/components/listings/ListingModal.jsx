import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ListingModal({listing, showModal, handleClose}) {
  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{listing.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img 
             src={listing.image}
             alt={listing.title}
             className='img-fluid'
             style={{ width: '100%'}}
            />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ListingModal;