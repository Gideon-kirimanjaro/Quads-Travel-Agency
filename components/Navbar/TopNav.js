import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Styles from "./Navbar.module.css";
const TopNav = () => {
  const navLinks = [
    { title: "Home", ref: "/#" },
    { title: "About", ref: "/about" },
    { title: "Tours", ref: "/tours" },
    { title: "Offers", ref: "/offers" },
    { title: "Contact", ref: "/contact" },
    { title: "Careers", ref: "/careers" },
    { title: "Faq", ref: "/faq" },
  ];

  return (
    <Navbar className={Styles.bg} expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image src="/favicon.png" alt="logo" width={100} height={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            {navLinks.map((item, index) => {
              return (
                <div key={index} className={Styles.links}>
                  {" "}
                  <Link href={item.ref}>{item.title}</Link>
                </div>
              );
            })}
          </Nav>
        </Navbar.Collapse>{" "}
      </Container>
    </Navbar>
  );
};

export default TopNav;
