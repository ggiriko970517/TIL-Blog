import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { faBell, faBook, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Logo = '/common/logo.png';

function HeaderBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={Logo}
            alt="GoBoogie Logo"
            style={{
              height: '40px',
              objectFit: 'contain'
            }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

            {/* 폼, 네브컨테이너   */}
          <div className="d-flex align-items-center ms-auto">
            {/* 검색 폼 */}
            <Form className="d-flex me-5">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{
                  width: '250px'
                }}
              />
              <Button variant="outline-success">Search</Button>
            </Form>



            {/* 네브컨테이너 */}
            <Nav
              className="d-flex align-items-center justify-content-center ms-auto my-1 my-lg-0"
              style={{
                maxHeight: '100px',
                gap: '15px'
              }}
              navbarScroll
            >
              {/* 알림아이콘 */}
              <Nav.Link href="#action1">
                <FontAwesomeIcon icon={faBell} size="2xl" style={{ color: "#FFD43B", }} />
              </Nav.Link>

              {/* 책 아이콘 */}
              <Nav.Link href="#action2">
                <FontAwesomeIcon icon={faBook} size="2xl" />
              </Nav.Link>

              {/* 사용자 드롭다운 */}
              <NavDropdown 
              title={<Nav.Link href="#action2">
                <FontAwesomeIcon icon={faUser} size="2xl"/>
              </Nav.Link>}
              id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#action2">
              <FontAwesomeIcon icon={faBars} size="2xl" />
              </Nav.Link>
            </Nav>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderBar;