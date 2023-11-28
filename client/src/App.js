// Import necessary dependencies
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Row, Col, Form} from 'react-bootstrap'; 
// Import the Button component from react-bootstrap
import { useState} from 'react';
// Define your functional component
export default function MyComponent() {
  const [getInput, setInput] = useState('');
  const handleChange = (e) => {
 
    setInput(e.target.value)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // async request which may result error
    try {const response = await fetch('https://just-login-page.vercel.app/submitEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: getInput }), // Replace with the actual email data
    });
    const data = await response.json();
    console.log(data);
    } catch (error) {
      console.log(error)
      console.log("connecting failed")
    }
  }
  return (
    <Container align="center" className='border border-info'>
      
      <Row sm={1} md={1}><Col>
      <Form onSubmit={handleSubmit} >
      <label>Get 20% off Voucher</label>
      <h1>{getInput}</h1>
      <input 
      type="email" 
      value={getInput} 
      onChange={handleChange} 
      placeholder='Email'
      required>
      
      </input>
      <input type="submit" value="submit"></input>
      </Form></Col></Row>
      {/* Render a div containing a Bootstrap Button */}
    
      
    </Container>
  );
}
