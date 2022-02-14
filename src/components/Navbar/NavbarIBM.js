import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const clear = () => {
   sessionStorage.clear()
}

const NavbarIBM = () => {
   return (
      <Navbar bg="dark" variant="dark">
         <Navbar.Brand href="/" style={{ paddingLeft: '10px' }}>
            <img
               srcSet="https://pngimg.com/uploads/ibm/ibm_PNG19649.png 10w"
               alt="IBM logo"
               width="80"
               height="30"
            />
         </Navbar.Brand>
         <Nav className="me-auto">
            <Nav.Link onClick={clear()} href="/">
               Log out
            </Nav.Link>
         </Nav>
      </Navbar>
   )
}

export default NavbarIBM
