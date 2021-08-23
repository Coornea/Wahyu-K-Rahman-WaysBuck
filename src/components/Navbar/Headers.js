import React, { useReducer, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { BiCartAlt, BiUserCircle, BiLogOutCircle } from "react-icons/bi";
import Logo from "../../assets/Logo.svg";
import Avatar from "../../assets/Avatar.svg";
import LoginModal from "../Modals/LoginModal";
import RegisterModal from "../Modals/RegisterModal";

function Headers() {
  const route = useHistory();
  const isLogedIn = window.localStorage.getItem("isLogedIn");

  const initialState = {
    modalLogin: false,
    modalRegister: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "ModalL":
        return {
          modalLogin: !state.modalLogin,
        };
      case "ModalR":
        return {
          modalRegister: !state.modalRegister,
        };
      case "switchModal":
        return {
          modalRegister: !state.modalRegister,
          modalLogin: !state.modalLogin,
        };
      case "forceRender":
        return {};
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleLogout() {
    window.localStorage.setItem("isLogedIn", false);
    dispatch({ type: "forceRender" });
    route.push("/");
  }

  const guest = (
    <>
      <Nav.Link>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => dispatch({ type: "ModalL" })}
        >
          Login
        </Button>
      </Nav.Link>
      <Nav.Link>
        <Button
          variant="danger"
          size="sm"
          className="bg-overide"
          onClick={() => dispatch({ type: "ModalR" })}
        >
          Register
        </Button>
      </Nav.Link>
    </>
  );
  const user = (
    <>
      <div className="position-relative mx-3 my-auto">
        <span className="position-absolute  top-0 start-100 translate-middle badge rounded-pill bg-danger">
          1<span className="visually-hidden">product in cart</span>
        </span>
        <Link to="/cart">
          <BiCartAlt className="icons-img" size="3rem"></BiCartAlt>
        </Link>
      </div>
      <Dropdown as={Nav.Item} className="ml-3">
        <Dropdown.Toggle as={Nav.Link}>
          <img
            className=""
            src={Avatar}
            alt="user pic"
            width="50px"
            style={{ position: "relative", transform: "translate(15px,-3px)" }}
          />
        </Dropdown.Toggle>
        <Dropdown.Menu align="end" className="shadow" style={{ border: 0 }}>
          <Dropdown.Item>
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "black" }}
            >
              <BiUserCircle className="mx-2 icons-img" size="2rem" />
              Profile
            </Link>
          </Dropdown.Item>
          <Dropdown.Item onClick={handleLogout}>
            <BiLogOutCircle className="mx-2 icons-img" size="2rem" />
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );

  useEffect(() => {
    const pathName = window.location.pathname;
    // dispatch({ type: 'forceRender' });
    if (pathName === "/signin" && (!isLogedIn || isLogedIn === "false")) {
      dispatch({ type: "ModalL" });
    }
  }, []);
  //    const [showLogin, setShowL] = useState(false);
  //    const [showRegister, setShowR] = useState(false);

  //   const handleCloseL = () => setShowL(false);
  //   const handleShowL = () => setShowL(true);
  //   const handleCloseR = () => setShowR(false);
  //   const handleShowR = () => setShowR(true);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="fixed-top shadow"
        bg="white"
      >
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img src={Logo} alt="..." width="70px" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>{isLogedIn === "true" ? user : guest}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal
        handleClose={() => dispatch({ type: "ModalL" })}
        switchModal={() => dispatch({ type: "switchModal" })}
        show={state.modalLogin}
      />
      <RegisterModal
        handleClose={() => dispatch({ type: "ModalR" })}
        switchModal={() => dispatch({ type: "switchModal" })}
        show={state.modalRegister}
      />
    </>
  );
}

export default Headers;
