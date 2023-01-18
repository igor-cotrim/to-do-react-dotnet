import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => (
  <Navbar bg="dark" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand as={NavLink} to="/">
        Ativy
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/cliente/lista" activeClassName="active">
            Clientes
          </Nav.Link>
          <Nav.Link as={NavLink} to="/atividade/lista" activeClassName="active">
            Atividades
          </Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown align="end" title="Igor" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">Perfil</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Configurações
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Sair</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Menu;
