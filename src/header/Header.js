import { Button, Image, Nav, Navbar } from "react-bootstrap";
import "./header.css";
import Logo from "../assets/Logo.svg";
import { ListNested } from "react-bootstrap-icons";
import { useState } from "react";
function HeaderComponent() {
  let [show, setShow] = useState(false);
  const showSmMenu = () => {
    show = !show;
    setShow(show);
  };
  return (
    <>
      <Navbar
        bg="white"
        className="justify-content-between align-items-center py-3"
      >
        <Navbar.Brand href="#home">
          <Image src={Logo} className="w-75" />
        </Navbar.Brand>
        <Nav className="d-lg-flex d-none gap-3 align-items-center">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#services">How It Works</Nav.Link>
          <Nav.Link href="#faqs">FAQs</Nav.Link>
          <Nav.Link href="#package">Package</Nav.Link>
          <Button
            variant="light"
            className="text-purple border-purple px-4 py-2 login-btn"
          >
            LOGIN
          </Button>
        </Nav>

        {/* small devices */}

        <Button
          variant="light"
          className="text-purple border-purple px-4 py-2 mobile-btn d-block d-lg-none"
          onClick={() => showSmMenu()}
        >
          <ListNested />
        </Button>
      </Navbar>
      {/* small devices */}

      {show === true && (
        <Navbar className="d-block mb-3 mobile-menu">
          <Nav className="d-lg-none d-flex justify-content-around">
            <div>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">How It Works</Nav.Link>
              <Nav.Link href="#faqs">FAQs</Nav.Link>
            </div>
            <div>
              <Nav.Link href="#package">Package</Nav.Link>
              <Button
                variant="light"
                className="text-purple border-purple px-4 py-2 login-btn"
              >
                LOGIN
              </Button>
            </div>
          </Nav>
        </Navbar>
      )}
    </>
  );
}

export default HeaderComponent;
