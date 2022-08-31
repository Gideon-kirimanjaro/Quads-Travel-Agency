import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import NavDropdown from "react-bootstrap/NavDropdown";
import Styles from "./Navbar.module.css";
const TopNav = () => {
  const navLinks = [
    { title: "Home", ref: "/#" },
    { title: "About", ref: "/about" },
    { title: "Tours", ref: "/tours" },
    { title: "Offers", ref: "/offers" },
    { title: "Contact", ref: "/contact" },
  ];
  console.log("NAVLINKS", navLinks);
  const dropDown = ["Terms", "Careers"];
  console.log("This is the style", Styles);
  return (
    <div className="top-nav">
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image src="/static/logo.png" alt="logo" width={150} height={100} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              {navLinks.map((item, index) => {
                return (
                  <Nav.Link key={index} className={Styles.links}>
                    <Link href={item.ref}>{item.title}</Link>
                  </Nav.Link>
                );
              })}
              <NavDropdown
                title="More"
                id="basic-nav-dropdown"
                className={Styles.links}
              >
                {dropDown.map((item, index) => {
                  return (
                    <NavDropdown.Item
                      href={item}
                      key={index}
                      className={Styles.links}
                    >
                      {item}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>{" "}
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNav;
