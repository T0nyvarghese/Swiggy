import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import './Footer.css';



function Footer() {
  return (
    <>
    <div  style={{height:'80vh', backgroundColor:'black'}} >

      <Row className='footer' style={{color:'white'}} >
        <Col></Col>
        <Col>
          <row className='d-flex justify-content-center align-items-center mt-5'>
            <img src="https://companieslogo.com/img/orig/swiggy.D-27748b7c.png?t=1699336580" alt="" style={{height:'30px'}} className='me-2' />
          <h5 className='mt-2' style={{color:'white'}}>Swiggy</h5>
          </row>
          <row><p className='ms-5  mt-3' style={{color:'whitesmoke'}}>© 2023 Bundl Technologies Pvt. Ltd</p></row>
        </Col>
        
        <Col className='mt-5' style={{marginLeft:'-10px'}}>
        <h6 className='mt-3' style={{color:'white', marginLeft:'30px'}}>Company</h6>
        <ul style={{listStyle:'none'}}>
          <li style={{ marginBottom: '10px' }}>About</li>
          <li style={{ marginBottom: '10px' }}>Career</li>
          <li style={{ marginBottom: '10px' }}>Team</li>
          <li style={{ marginBottom: '10px' }}>swiggy One</li>
          <li style={{ marginBottom: '10px' }}>Swiggy Instamart</li>
          <li style={{ marginBottom: '10px' }}>Swiggy Genie</li>
        </ul>
        </Col>
        <Col className='mt-5'>
         <Row className='mt-3 ms-2'>
          <h6 style={{marginLeft:'0px'}}>Contact us</h6>
          <ul style={{listStyle:'none'}}>
            <li style={{ marginBottom: '10px' }}>Help & Support</li>
            <li style={{ marginBottom: '10px' }}>Partner with us</li>
            <li style={{ marginBottom: '10px' }}>Ride with us</li>
          </ul>
         </Row>
         <Row  className='mt-3 ms-2'>
          <h6 style={{marginLeft:'0px'}}>Legal</h6>
          <ul style={{listStyle:'none'}}>
            <li style={{ marginBottom: '10px' }}>Terms & Conditions</li>
            <li style={{ marginBottom: '10px' }}>Cookie Policy</li>
            <li style={{ marginBottom: '10px' }}>Privacy Policy</li>
          </ul>
         </Row>
        </Col>
        <Col className='mt-5'>
        <h6 className='mt-3' style={{marginLeft:'30px'}}>We Deliver To:</h6>
        <ul style={{listStyle:'none'}}>
          <li style={{ marginBottom: '10px' }}>Banglore</li>
          <li style={{ marginBottom: '10px' }}>Gurgaon</li>
          <li style={{ marginBottom: '10px' }}>Hydrabad</li>
          <li style={{ marginBottom: '10px' }}>Delhi</li>
          <li style={{ marginBottom: '10px' }}>MUmbai</li>
          <li style={{ marginBottom: '10px' }}>Pune</li>

          <Form.Select className='border border-light' style={{backgroundColor:'black'}} size="sm">
        <option>586 cities </option>
      </Form.Select>
        </ul>
        </Col>
        <Col></Col>
      </Row>
        
    </div>
    </>
  )
}

export default Footer