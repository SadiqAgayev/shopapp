import React, { Component } from "react";
import { Table, Badge } from "reactstrap";

export default class CartList extends Component {
  renderCart = () => {
    return (
      <div>
        <Badge className="mb-1" color="primary" style={{ width: "100%" }}>
          <h1>CartList</h1>
        </Badge>
        <Table dark responsive striped hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>ProductName</th>
              <th>QuantityPerUnit</th>
              <th>UnitPrice</th>
              <th>UnitsInStock</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((c) => {
              return (
                <tr key={c.product.id}>
                  <td>{c.product.id}</td>
                  <td>{c.product.productName}</td>
                  <td>{c.product.quantityPerUnit}</td>
                  <td>{c.product.unitPrice}</td>
                  <td>{c.product.unitsInStock}</td>
                  <td>{c.quantity}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.props.removeFromCart(c)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? (
          this.renderCart()
        ) : (
          <h1>
            <Badge className="w-100" color="warning">Cart is empty</Badge>
          </h1>
        )}
      </div>
    );
  }
}
