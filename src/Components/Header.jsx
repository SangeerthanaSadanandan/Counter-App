import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='dark' style={{padding:'20px'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' style={{color:'white'}}>
            COUNTER APP
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
