import React, { useReducer, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../../assets/Logo.svg";
import LoginModal from "../Modals/LoginModal";
import RegisterModal from "../Modals/RegisterModal";
import User from "./User";
import Guest from "./Guest";
import Admin from "./Admin";

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

  useEffect(() => {
    // const dataAllUser = require('../../data/Users.json');
    // console.log('dataAllUser :', dataAllUser);
    // window.localStorage.setItem();
    const pathName = window.location.pathname;
    // dispatch({ type: 'forceRender' });
    if (pathName === "/signin" && (!isLogedIn || isLogedIn === "false")) {
      dispatch({ type: "ModalL" });
    }
  }, []);

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
            <Nav>
              {isLogedIn === "true" ? (
                <User handleLogout={handleLogout} />
              ) : (
                <Guest dispatch={dispatch} />
              )}
            </Nav>
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
