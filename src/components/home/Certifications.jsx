import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import {Container, Card, Row, Form, Col, Button} from "react-bootstrap";
import { Jumbotron } from "./migration";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { images } from "../../commonData/images";
import { Link } from "react-router-dom";


const Certifications = () => {



 
  
  return (
    <Jumbotron fluid className="bg-white m-0 d-flex justify-content-center align-items-center" style={{ height: "100vh" }} id="certifications">
      <Container className="p-5 ">
        <Row>
          <h2 className="display-4 pb-1 text-center">
            Certifications
          </h2>
            
        </Row>
          

          <Row className="mt-4">
            
            <Col md={4}>
                <Card>
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <img src={images('ccna')} alt="ccna" width={180} height={180} />
                    <Card.Title className="mt-3 text-center">
                    Cisco Certified Network Associate Routing and Switching (CCNA Routing and Switching)
                    </Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Link to='https://www.credly.com/badges/05f37f15-e46b-4ce2-986b-1c23042b85c2/linked_in_profile' target="_blank" className="btn btn-outline-secondary mx-2">View</Link>
                </Card.Footer>
                </Card>
            </Col>


            <Col md={4}>
                <Card>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                        <img src={images('microsoft')} alt="ccna" width={200} height={200} />
                        <Card.Title className="mt-3 text-center">
                        Microsoft Certified: Azure Administrator Associate
                        </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <Link to='https://learn.microsoft.com/en-us/users/gabrielgonzalez-7651/credentials/d2313df5b54e78f1' target="_blank" className="btn btn-outline-secondary mx-2">View</Link>
                    </Card.Footer>
                </Card>
            
            </Col>

            <Col md={4}>
                <Card>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                        <img src={images('microsoft')} alt="ccna" width={200} height={200} />
                        <Card.Title className="mt-3 text-center">
                        Microsoft Certified: Azure Network Engineer Associate
                        </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <Link to='https://learn.microsoft.com/en-us/users/gabrielgonzalez-7651/credentials/a51ed4bc2d868749' target="_blank" className="btn btn-outline-secondary mx-2">View</Link>
                    </Card.Footer>
                </Card>
            
            </Col>




          </Row>
        
        
       
      </Container>
    </Jumbotron>
  );
};

export default Certifications;
