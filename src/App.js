import React from "react";
import './App.css';
import { Col, Container, Row } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Allcourses from "./components/Allcourses";
import Header from "./components/Header";
import Menu from "./components/Menu";
import {BrowserRouter as Router, Route} from "react-router-dom";
import startjourney from "./components/startjourney";
import Add_Details from "./components/Add_Details";
import AboutUs from "./components/About_Us";
import ContactInfo from "./components/Contact_Info";
import seeMore from "./components/see-more";

function App() {
  const buttonHandle = () => {};
  return (
    <div>
      <Router>
        <Container>
        <Header />
          <Row>
          <Col md={2}><Menu/></Col>
            <Col md={10}>
              <Route path="/" component={Home} exact />
              <Route path="/view-courses" component={Allcourses} exact />
              <Route path="/Add_Details" component={Add_Details} exact />
              <Route path="/seeMore/" component={seeMore} />
              <Route path="/startjourney" component={startjourney} />
              <Route path="/About_Us" component={AboutUs} />
              <Route path="/Contact_Info" component={ContactInfo} />
            </Col>     
        </Row>
        </Container>
      </Router>
    </div>
  );
};
export default App;