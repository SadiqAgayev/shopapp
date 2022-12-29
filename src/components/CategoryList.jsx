import React, { Component } from "react";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <Badge className="mb-1" color="danger" style={{ width: "100%" }}>
          <h1>CategoryList</h1>
        </Badge>
        <ListGroup>
          {this.props.categories.map((category) => {
            return (
              <ListGroupItem
                active={category.categoryName === this.props.currentCategory}
                onClick={() => this.props.changeCategory(category)}
                key={category.id}
              >
                {category.categoryName}
              </ListGroupItem>
            );
          })}
        </ListGroup>
        <h2>{this.props.currentCategory}</h2>
      </div>
    );
  }
}
