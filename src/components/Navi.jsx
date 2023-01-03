import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "./CartSummary";

function Navi(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} className="px-5">
        <NavbarBrand href="/" className="ps-5">
          <h1>Shop</h1>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto pe-5" navbar>
            <NavItem>
              <NavLink href="/components/">
                <Link to="/product" className="text-decoration-none">
                  Product
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                <Link className="text-decoration-none">GitHub</Link>
              </NavLink>
            </NavItem>
            <CartSummary
              cart={args.cart}
              removeFromCart={args.removeFromCart}
            />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;
