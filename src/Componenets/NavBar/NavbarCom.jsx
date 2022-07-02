import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Searchbox from "../Search/Searchbox";
import "./NavBarCom.css";

function NavbarCom({ searchValue, searchValueChange }) {
  return (
    <div className="">
      {/* <div className="col">
        <img className="logo" src="./netflix.png" alt="logo" />
      </div> */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img className="logo" src="./netflix.png" alt="logo" />
          </Navbar.Brand>
          <Nav className="my-menu" expand="lg">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/top-rating">Top Rating</Nav.Link>
            <Nav.Link href="/wishlist">Top Favourites</Nav.Link>
          </Nav>
          <Searchbox
            searchValue={searchValue}
            searchValueChange={searchValueChange}
          />
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarCom;
