import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
    state = {
        categories: [
            {categoryId: 1, categoryName: "Beverages"},
            {categoryId: 2, categoryName: "Condiments"},
            {categoryId: 3, categoryName: "Meals"}
        ],
        currentCategory: ""
    }

    changeCategory = (category) => {
        this.setState({currentCategory: category.categoryName})
    }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ListGroup>
            {this.state.categories.map(category => {
                return <ListGroupItem active={category.categoryName===this.state.currentCategory} onClick={() => this.changeCategory(category)} key={category.categoryId}>{category.categoryName}</ListGroupItem>
            })}
        </ListGroup>
        <h2>{this.state.currentCategory}</h2>
      </div>
    );
  }
}
