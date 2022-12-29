import React, { Component } from "react";
import { Table, Badge } from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <Badge className="mb-1" color="primary" style={{ width: "100%" }}>
          <h1>ProductList</h1>
        </Badge>
        <Table dark responsive striped hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>ProductName</th>
              <th>QuantityPerUnit</th>
              <th>UnitPrice</th>
              <th>UnitsInStock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.productName}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.unitsInStock}</td>
                  <td>
                    <button className="btn btn-success">Add</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
