import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import NavDropdown from "react-bootstrap/NavDropdown";
import Styles from "./Navbar.module.css";
import { motion } from "framer-motion";
const TopNav = () => {
  console.log("FRAMER MOTION", motion);
  const navLinks = [
    { title: "Home", ref: "/#" },
    { title: "About", ref: "/about" },
    { title: "Tours", ref: "/tours" },
    { title: "Offers", ref: "/offers" },
    { title: "Contact", ref: "/contact" },
    { title: "Careers", ref: "/careers" },
    { title: "Faq", ref: "/faq" },
  ];
  const dropDown = [
    { href: "/careers", title: "Careers" },
    { href: "/faq", title: "Faq" },
  ];

  return (
    <Navbar className={Styles.bg} expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image src="/favicon.png" alt="logo" width={100} height={100} />
        </Navbar.Brand>
        <Navbar.Toggle
          // initial={{ y: "50%", opactity: 0, scale: 0.5 }}
          // animate={{ y: 0, opactiy: 1, scale: 1 }}
          aria-controls="basic-navbar-nav"
          className={Styles.toggle}
        />
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
