import { Badge, Col, Container, Row } from "reactstrap";
import CategoryList from "./components/CategoryList";
import Navi from "./components/Navi";
import ProductList from "./components/ProductList";

function App() {

  return (
    <div className="App">
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="4">
            <Badge color="danger" style={{width: "100%"}}>
              <CategoryList title="CategoryList" />
            </Badge>
          </Col>
          <Col xs="8">
            <Badge color="primary" style={{width: "100%"}}><ProductList /></Badge>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
