import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./components/CategoryList";
import Navi from "./components/Navi";
import ProductList from "./components/ProductList";

export default class App extends Component {
  state = {
    categories: [],
    currentCategory: "",
    products: [],
    cart: [],
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getCategories();
    this.getProducts();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((responseJson) => this.setState({ categories: responseJson }));
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => this.setState({ products: responseData }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    let addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(
      (ci) => ci.product.id !== product.product.id
    );

    this.setState({ cart: newCart });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Navi
              color="dark"
              dark={true}
              expand="sm"
              cart={this.state.cart}
              removeFromCart={this.removeFromCart}
            />
          </Row>
          <Row className="mt-2">
            <Col xs="4">
              <CategoryList
                categories={this.state.categories}
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
              />
            </Col>
            <Col xs="8">
              <ProductList
                products={this.state.products}
                addToCart={this.addToCart}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
