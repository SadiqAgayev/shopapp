import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavLink,
} from "reactstrap";

export default class CartSummary extends Component {
  renderCart() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Your Cart
          </DropdownToggle>
          <DropdownMenu>
            {this.props.cart.map((ci) => {
              return (
                <DropdownItem key={ci.product.id}>
                  <Badge
                    color="danger"
                    className="me-2"
                    onClick={() => this.props.removeFromCart(ci)}
                  >
                    x
                  </Badge>
                  {ci.product.productName}
                  <Badge color="success" className="ms-2">
                    {ci.quantity}
                  </Badge>
                </DropdownItem>
              );
            })}
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? (
          this.renderCart()
        ) : (
          <NavLink>Empty Cart</NavLink>
        )}
      </div>
    );
  }
}
