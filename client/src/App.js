// Import necessary dependencies
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
// Define your functional component
export default function MyComponent() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
axios.defaults.withCredentials=true;
  const handleSubmit = async (e) => {
    e.preventDefault();
    // async request which may result error
    axios.post('https://just-login-page.vercel.app/submitEmail', {email})
    .then(result=> console.log(result))
    .catch(err=> console.log(err))
  };

  return (
    <Container align="center" className="border border-info">
      <Row sm={1} md={1}>
        <Col>
          <Form onSubmit={handleSubmit}>
            <label>Get 20% off Voucher</label>
            <h1>{email}</h1>
            <input
              type="email"
              value={email}
              onChange={handleChange}
              className="form-control" // Add Bootstrap class for styling
              placeholder="Email"
              required
            />
            <input type="submit" value="Submit" className="btn btn-primary mt-2" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}