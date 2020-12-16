import React from 'react'
import { Container, Navbar} from 'react-bootstrap'

function HeaderComponent() {
    return (
      <>
        <Navbar className="navbar" expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">Next application Demo</Navbar.Brand>
        </Navbar>
      </>
    );
}

export default HeaderComponent
