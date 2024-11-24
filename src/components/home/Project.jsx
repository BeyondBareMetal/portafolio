import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import {Row, Col, Card} from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import clienteAxios from "../config/clienteAxios";
import { Link } from "react-router-dom";



const Project = ({ heading}) => {

  const [projectsArray, setProjectsArray] = useState([]);
  const [posts, setPosts] = useState(["the-beginning-what-is-beyond-bare-metal"])

 const get_post = async() =>{
  let data = JSON.stringify({
    query: `query Publication {
      publication(host: "beyondbaremetal.hashnode.dev") {
          isTeam
          title
          post(slug: "${posts[0]}") {
              title
              content {
                  markdown
                  html
              }
          }
      }
  }`,
    variables: {}
  });

  console.log(data)

  const response = await clienteAxios.post('/',data );
  console.log('proyectos',response)
  setProjectsArray(response.data.data.publication.post)


 }

 useEffect(()=>{
  get_post()
 }, [])

 console.log('yo',projectsArray)

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          <Col md={6}>
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
              <Card.Body>
                <Card.Title as="h5">{ `The Beginning - What is Beyond Bare Metal?` || <Skeleton />} </Card.Title>
                <Card.Text>{`"Beyond Bare Metal" is a series of projects showcasing the growth of a medium-sized company. It begins with a single office and basic infrastructure and evolves into a multi-site, cloud-integrated enterprise. I will implement the knowledge I've gathe...` || <Skeleton count={3} />} </Card.Text>
                <Card.Footer>
                  <Link to="https://beyondbaremetal.hashnode.dev/the-beginning-what-is-beyond-bare-metal" target="_blank" className="btn btn-outline-secondary mx-2">Read More</Link>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
              <Card.Body>
                <Card.Title as="h5">{ `Azure Onboard Automator` || <Skeleton />} </Card.Title>
                <Card.Text>{`Streamline and automate the process of onboarding a new employee into Azure AD and assigning necessary Azure resources.` || <Skeleton count={3} />} </Card.Text>
                <Card.Footer>
                  <Link to="#"  className="btn btn-outline-secondary mx-2">Read More</Link>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
