import React, { Component } from "react";
import { Badge, Col, Container, Row } from "reactstrap";
import CategoryList from "./components/CategoryList";
import Navi from "./components/Navi";
import ProductList from "./components/ProductList";

export default class App extends Component {
  state = {
    categories: [],
    currentCategory: "",
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  componentDidMount() {
    this.getCategories()
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((responseJson) => this.setState({ categories: responseJson }));
  };
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Navi color="dark" dark={true} expand="sm" />
          </Row>
          <Row className="mt-2">
            <Col xs="4">
              <Badge color="danger" style={{ width: "100%" }}>
                <CategoryList
                  categories={this.state.categories}
                  currentCategory={this.state.currentCategory}
                  changeCategory={this.changeCategory}
                />
              </Badge>
            </Col>
            <Col xs="8">
              <Badge color="primary" style={{ width: "100%" }}>
                <ProductList />
              </Badge>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
