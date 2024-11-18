import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import {Row, Col, Card} from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import clienteAxios from "../config/clienteAxios";



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
                <Card.Title as="h5">{ <Skeleton />} </Card.Title>
                {/* <Card.Text>{(!description) ? "" : description || <Skeleton count={3} />} </Card.Text> */}
                {/* {svn_url ? <CardButtons svn_url={svn_url} /> : <Skeleton count={2} />} */}
                
                {/* {languages_url ? (
                  <Language languages_url={languages_url} repo_url={svn_url} />
                ) : (
                  <Skeleton count={3} />
                )}
                {value ? (
                  <CardFooter star_count={stargazers_count} repo_url={svn_url} pushed_at={pushed_at} />
                ) : (
                  <Skeleton />
                )} */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
