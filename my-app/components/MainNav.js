import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

const MainNav = () => {
  return (
    <>
      <Navbar className="fixed-top navbar-dark bg-dark">
        <Container>
          <Navbar.Brand>Gaurav Saini</Navbar.Brand>
          <Nav>
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Movies</Nav.Link>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <Nav.Link>About</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
};

export default MainNav;