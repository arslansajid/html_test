import React from 'react';
import Header from "./components/header";
import Card from "./components/card";
import Parallax from "./components/parallax";
import { Container, Row, Col } from "reactstrap"
import "./App.css";
import "./sidebar.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Parallax />
      <div className="main-heading">I am open sans extra bold 48px</div>
      <div className="main-sub-heading d-none d-lg-block d-md-block">Please follow all directions,make fonts the same size, respect margins and spacing.</div>
      <div className="main-sub-heading d-lg-none d-md-none d-block">I am open sans extra bold 48px</div>
      <Container /* fluid={true} */>
        <Row>
          <Col lg="4" md="4" xs="12" className="card-container">
            <Card image={"1"} />
          </Col>
          <Col lg="4" md="4" xs="12" className="card-container">
            <Card image={"2"} />
          </Col>
          <Col lg="4" md="4" xs="12" className="card-container">
            <Card image={"3"} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
