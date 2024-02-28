import React, { useState } from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import { Modal } from 'react-bootstrap';

function Header({OpenSidebar}) {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
       
        <div className='header-right'>
        <>
        <a href='../DemandeProduit' style={{color:'white'}}>
  <BsFillBellFill className='icon' onClick={handleShow} />Liste des Demande d'ajouter Produit </a>
  <Modal show={showModal} onHide={handleClose} style={{ position: 'absolute', top: 'calc(100% +1500px)', right: 650, backgroundColor: 'white', padding: '100px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',width:"30%" }}>
    <Modal.Body>
      <button  onClick={handleClose} style={{ width: "25%",right:250, top: 'calc(100% +150px)'}}>Fermer</button>
    </Modal.Body>
    <Modal.Footer>
    </Modal.Footer>
  </Modal>
</>


            <BsFillEnvelopeFill className='icon' style={{marginLeft:55}}/> Liste des demande d'ajouter Allergie
        </div>
    </header>
  )
}

export default Header