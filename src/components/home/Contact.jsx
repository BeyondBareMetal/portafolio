import React, {useState} from "react";
import {Container, Card, Row, Form, Col, Button} from "react-bootstrap";
import { Jumbotron } from "./migration";
import mailAxios from "../config/mailAxios";



const Skills = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject:''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await mailAxios.post('/send-email', formData);
      console.log(response)
      if (response.status === 200) {
        setFormData({
          name: '',
          email: '',
          message: '',
          subject:''
        })
      }
      setSuccessMessage(response.data.message);
      setErrorMessage('');
      setTimeout(() => setSuccessMessage(''), 2500);
    } catch (error) {
      console.log(error)
      setErrorMessage('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
      setSuccessMessage('');
      setTimeout(() => setErrorMessage(''), 2500);
    }
  };
 
  
  return (
    <Jumbotron fluid className="bg-white m-0 d-flex justify-content-center align-items-center" style={{ height: "100vh" }} id="contact">
      <Container className="p-5 ">
        <Row>
          <h2 className="display-4 pb-1 text-center">
            Contact
          </h2>
            <span className="text-muted text-center">Montevideo, Uruguay</span>
        </Row>
          
        
         <Card style={{ width: "50%" }} className="shadow mx-auto mt-3">
        <Card.Body>
          <Form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
            <Col className="mb-3" style={{ width: "100%" }}>
              <Form.Control
                placeholder="Your Name*"
                aria-label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Col>
            <Col className="mb-3" style={{ width: "100%" }}>
              <Form.Control
                placeholder="Your Email*"
                aria-label="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Col>
            <Col className="mb-3" style={{ width: "100%" }}>
              <Form.Control
                placeholder="Your Subject*"
                aria-label="Your Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Col>
            <Col className="mb-3" style={{ width: "100%" }}>
              <Form.Control as="textarea" placeholder="Your Message..." rows={5}
               name="message"
               value={formData.message}
               onChange={handleChange}
               required
              />
            </Col>

            <Col className="d-flex justify-content-center">
              <Button variant="secondary" type="submit">Send Message</Button>
            </Col>
          </Form>
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
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
