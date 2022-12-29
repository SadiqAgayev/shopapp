import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <h1>CategoryList</h1>
        <ListGroup>
          {this.props.categories.map((category) => {
            return (
              <ListGroupItem
                active={category.categoryName === this.props.currentCategory}
                onClick={() => this.props.changeCategory(category)}
                key={category.categoryId}
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
