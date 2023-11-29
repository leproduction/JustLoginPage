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
    <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', // Adjust this value based on your layout requirements
      backgroundImage: `url('https://images.pexels.com/photos/6102100/pexels-photo-6102100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
       // Use process.env.PUBLIC_URL to refer to the public folder
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    className='background-container'
  >
    <Container align="center" className="border border-info my-4 mx-3 rounded p-5" id="divPromo"
    style={{
      color: 'rgba(0, 0, 0, 1)', // Text color with 100% opacity (white)
      backgroundColor: 'rgba(0, 123, 255, 0.29)', // Background color with 20% opacity
      padding: '10px', // Adding some padding for better visibility
      borderRadius: '5px', // Adding border-radius for rounded corners
    }}>
      <Row sm={1} md={1}>
        <Col>
          <Form onSubmit={handleSubmit}>
            <label>Welcome to <big className='text-info'>Miami Shop</big></label> <br></br>
            <label 
        
            >Sign up & <big className='text-danger'>20% off</big> Voucher</label>

            <input
              type="email"
              value={email}
              onChange={handleChange}
              className="form-control" // Add Bootstrap class for styling
              placeholder="Email"
              required
            />
            <input 
            style={{
              color: 'rgba(0, 0, 0, 1)'}}
            type="submit" value="Submit" className="btn bg-light mt-2" />
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
}