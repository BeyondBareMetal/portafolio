import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import {Container, Card, Row, Form, Col, Button} from "react-bootstrap";
import { Jumbotron } from "./migration";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Skills = (props) => {



 
  
  return (
    <Jumbotron fluid className="bg-white m-0 d-flex justify-content-center align-items-center" style={{ height: "100vh" }} id="skills">
      <Container className="p-5 ">
        <Row>
          <h2 className="display-4 pb-1 text-center">
            Contact
          </h2>
            <span className="text-muted text-center">Montevideo, Uruguay</span>
        </Row>
          
        
         <Card style={{ width: "50%" }} className="shadow mx-auto mt-3">
        <Card.Body>
          <Form className="d-flex flex-column align-items-center">
            <Col className="mb-3" style={{ width: "100%" }}>
              <Form.Control
                placeholder="Your Name*"
                aria-label="Your Name"
                name="name"
              />
            </Col>
            <Col className="mb-3" style={{ width: "100%" }}>
              <Form.Control
                placeholder="Your Email*"
                aria-label="Your Email"
                name="email"
              />
            </Col>
            <Col className="mb-3" style={{ width: "100%" }}>
              <Form.Control
                placeholder="Your Subject*"
                aria-label="Your Subject"
                name="subject"
              />
            </Col>
            <Col className="mb-3" style={{ width: "100%" }}>
              <Form.Control as="textarea" placeholder="Your Message..." rows={5} />
            </Col>

            <Col className="d-flex justify-content-center">
              <Button variant="secondary">Send Message</Button>
            </Col>
          </Form>
        </Card.Body>
      </Card>

      <div className="p-5 d-flex justify-content-center">
            {props.icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons2`} />
              </a>
            ))}
          </div>       
      </Container>
    </Jumbotron>
  );
};

export default Skills;
