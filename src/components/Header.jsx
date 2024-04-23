import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCartPlus, faCertificate, faMagnifyingGlass, faUser,} from '@fortawesome/free-solid-svg-icons';
import { faHireAHelper } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Header.css';

function Header({ name, ...props }) {
  const [isFixed, setIsFixed] = useState(true);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleExit = () => setOpen(false);
  const handleOpen = () => setOpen(true);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 850) { // Adjust this value to set the height at which the navbar becomes static
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='header' style={{ height: '10px', overflow: 'hidden' }}>
        <div className='row'>
          <nav className={`navbar bg-light ${isFixed ? 'fixed-top' : ''}`} style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', transition: 'top 0.3s' }}>
            <div className='col' style={{ marginRight: '20%', marginLeft: '8%', position: isFixed ? 'relative' : 'static' }}>
              <img style={{ height: '50px', marginLeft: '-50px' }} className=' mt-2 mb-2'  src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" alt="" />
              <li onClick={handleShow} id='offcanva' style={{ marginLeft: '37px', fontSize: '13px', fontWeight: 'bold', textDecoration: 'underline', textDecorationThickness: '2px' }}>Other <sup><FontAwesomeIcon icon={faAngleDown} style={{ color: "#f97e0b" }} className='ms-3' size='2xl'/></sup></li>
            </div>
            <div className='col d-flex justify-content-center align-items-center'>
              <li style={{ fontSize: '15px', fontWeight: 'bold', marginLeft: '-200px' }}><FontAwesomeIcon icon={faMagnifyingGlass}className='me-2'/>Search</li>
              <li style={{ fontSize: '15px', fontWeight: "bold" }}><FontAwesomeIcon icon={faCertificate} className='me-2' />Offers<sup className='ms-1 mt-1' style={{ color: 'orange' }}>New</sup></li>
              <li style={{ fontSize: '15px', fontWeight: 'bold' }}><FontAwesomeIcon icon={faHireAHelper} className='me-2' />Help</li>
              <li onClick={handleOpen} id='offcanva' style={{ fontSize: '15px', fontWeight: 'bold' }}><FontAwesomeIcon icon={faUser}  className='me-2' />sign in</li>
              <li style={{ fontSize: '15px', fontWeight: 'bold', marginRight: '50px' }}><FontAwesomeIcon icon={faCartPlus} className='me-2' />Cart</li>
            </div>
          </nav>
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
  <Offcanvas.Header closeButton>
  </Offcanvas.Header>
  <Offcanvas.Body>
  <div className='d-flex mt-3'>
      <input  type="text" className='form-control shadow' style={{height:'50px'}} placeholder='Search for area, street name' />
    </div>
  </Offcanvas.Body>
</Offcanvas>

<Offcanvas show={open} onHide={handleExit} placement='end'{...props}>
            <Offcanvas.Header  closeButton>
             </Offcanvas.Header>
             <Offcanvas.Title className='ms-5 mt-3' style={{fontSize:'30px'}}>Login</Offcanvas.Title>
          <Offcanvas.Body>
          <p className='ms-4' style={{fontSize:'12px'}}>or <span className='text-danger'>create an account</span></p>
          <FloatingLabel className='shadow'  controlId="floatingPassword" label="Phone number">
          <Form.Control style={{height:'70px'}} type="Numbers" placeholder="Number" />
          </FloatingLabel>
          <Button variant='outline-none' className='mt-3' style={{background:'orange', color:'white', borderRadius:'0px', width:'100%'}} size="lg">Login</Button>
          <p style={{fontSize:'13px'}}>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
         </Offcanvas.Body>
         </Offcanvas>

    </>
  );
}

export default Header;
