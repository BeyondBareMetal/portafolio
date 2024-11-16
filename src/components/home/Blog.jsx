import React, { useState, useEffect } from "react";
import {Container, Col, Row, Card} from "react-bootstrap";
import { Jumbotron } from "./migration";
import clienteAxios from "../config/clienteAxios";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";




const Blogs = () => {

  const [post, setPost] = useState({})
  const get_post = async () =>{
    let data = JSON.stringify({
      query: `query Publication {
        publication(host: "beyondbaremetal.hashnode.dev") {
            isTeam
            title
            posts(first: 10) {
                edges {
                    node {
                        title
                        brief
                        url
                    }
                }
            }
        }
    }`,
      variables: {}
    });
      
    const response = await clienteAxios.post('/', data)
    console.log(response)
    try {
      if (response) {
        setPost(response.data.data.publication.posts.edges)
      }
    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(() =>{
    get_post()
  },[])
  console.log('post',post)



  return (
    <Jumbotron fluid id="blog" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">Recent Post</h2>
        <Row>
      	  {post && post.length > 0 ?(
            	post.map((item) =>(
                <Col md={6}>
                  <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
                    <Card.Body>
                    <Card.Title as="h5">{item.node.title || <Skeleton/>} </Card.Title>
                    <Card.Text>{(!item.node.brief) ? "" : item.node.brief || <Skeleton/> } </Card.Text>
                      
                    </Card.Body>

                    <Card.Footer>
                      <Link to={item.node.url} target="_blank" className="btn btn-outline-secondary mx-2">Read More</Link>
                    </Card.Footer>

                  </Card>
                </Col>
              ))
          ):(
            <div>Cargando...</div>
          )}

          

        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Blogs;
