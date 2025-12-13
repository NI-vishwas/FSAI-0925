import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';

function AppNavBar() {
   return (
       <Navbar bg="light" expand="lg" className="border-bottom">
          <Container>
              <Navbar.Brand href="#">MyApp</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href="/">Home</Nav.Link>
                     <Nav.Link href="/about">About</Nav.Link>
                  </Nav>
                  <Form className="d-flex me-2">
                     <FormControl type="search" placeholder="Search" className="me-2" />
                     <Button variant="outline-primary">Search</Button>
                  </Form>
                  <Button variant="outline-secondary" className="me-2">Signin</Button>
                  <Button variant="primary">Register</Button>
              </Navbar.Collapse>
          </Container>
       </Navbar>
   );
}
export default AppNavBar;

