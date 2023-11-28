// Import necessary dependencies
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Row, Col, Form } from 'react-bootstrap';

// Define your functional component
export default function MyComponent() {
  const [getInput, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // async request which may result error
    try {
      const response = await fetch('https://just-login-page.vercel.app/submitEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: getInput }), // Replace with the actual email data
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      console.log('Connecting failed');
    }
  };

  return (
    <Container align="center" className="border border-info">
      <Row sm={1} md={1}>
        <Col>
          <Form onSubmit={handleSubmit}>
            <label>Get 20% off Voucher</label>
            <h1>{getInput}</h1>
            <input
              type="email"
              value={getInput}
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