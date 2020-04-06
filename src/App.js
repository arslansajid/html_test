import React from 'react';
import Header from "./components/header";
import Card from "./components/card";
import Parallax from "./components/parallax";
import { Container, Row } from "reactstrap"
import "./App.css";
import "./sidebar.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Parallax />
      <div className="main-heading">I am open sans extra bold 48px</div>
      <p className="main-sub-heading d-none d-lg-block d-md-block">Please follow all directions,make fonts the same size, respect margins and spacing.</p>
      <p className="main-sub-heading d-lg-none d-md-none d-block">I am open sans extra bold 48px</p>
      <div className="px">
      <Container fluid={true}>
        <Row noGutters={true} className="justify-content-center">
          <div  className="card-container">
            <Card image={"1"} />
          </div>
          <div  className="card-container">
            <Card image={"2"} />
          </div>
          <div  className="card-container">
            <Card image={"3"} />
          </div>
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default App;
