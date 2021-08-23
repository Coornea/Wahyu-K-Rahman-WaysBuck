import React, { useReducer } from "react";
import { useHistory } from "react-router";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { BiCartAlt, BiUserCircle, BiLogOutCircle } from "react-icons/bi";
import Logo from "../../assets/Logo.svg";
import Avatar from "../../assets/Avatar.svg";
import LoginModal from "../Modals/LoginModal";
import RegisterModal from "../Modals/RegisterModal";

function Headers() {
  const route = useHistory();

  const initialState = {
    modalLogin: false,
    modalRegister: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "showModalL":
        return { modalLogin: true };
      case "showModalR":
        return { modalRegister: true };
      case "hideModalL":
        return { modalLogin: false };
      case "hideModalR":
        return { modalRegister: false };
      case "forceRender":
        return {};
      case "switchModal":
        return {
          modalRegister: !state.modalRegister,
          modalLogin: !state.modalLogin,
        };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const isLogedIn = window.localStorage.getItem("isLogedIn");

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
          onClick={() => dispatch({ type: "showModalL" })}
        >
          Login
        </Button>
      </Nav.Link>
      <Nav.Link>
        <Button
          variant="danger"
          size="sm"
          className="bg-overide"
          onClick={() => dispatch({ type: "showModalR" })}
        >
          Register
        </Button>
      </Nav.Link>
    </>
  );
  const user = (
    <>
      <BiCartAlt className="mx-3 my-auto icons-img" size="3rem" />
      <Dropdown as={Nav.Item} className="ml-3">
        <Dropdown.Toggle as={Nav.Link}>
          <img
            className=""
            src={Avatar}
            alt="user pic"
            width="50px"
            style={{ position: "relative", transform: "translate(0,0)" }}
          />
        </Dropdown.Toggle>
        <Dropdown.Menu align="right">
          <Dropdown.Item>
            <BiUserCircle className="mx-2 icons-img" size="2rem" />
            Profile
          </Dropdown.Item>
          <Dropdown.Item onClick={handleLogout}>
            <BiLogOutCircle className="mx-2 icons-img" size="2rem" />
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
  //    const [showLogin, setShowL] = useState(false);
  //    const [showRegister, setShowR] = useState(false);

  //   const handleCloseL = () => setShowL(false);
  //   const handleShowL = () => setShowL(true);
  //   const handleCloseR = () => setShowR(false);
  //   const handleShowR = () => setShowR(true);
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="..." width="70px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>{isLogedIn === "true" ? user : guest}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal
        handleClose={() => dispatch({ type: "hideModalL" })}
        switchModal={() => dispatch({ type: "switchModal" })}
        show={state.modalLogin}
      />
      <RegisterModal
        handleClose={() => dispatch({ type: "hideModalR" })}
        switchModal={() => dispatch({ type: "switchModal" })}
        show={state.modalRegister}
      />
    </>
  );
}

export default Headers;
