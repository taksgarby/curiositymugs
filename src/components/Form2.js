import '../styles/Form2.css';
import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, FloatingLabel, Row, Col } from 'react-bootstrap';

function Form2() {
  const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const confirmationError = useRef(null);
  const progressBar = useRef(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (password !== confirmation) {
      event.preventDefault();
      event.stopPropagation();
      confirmationError.current.style.display = null;
    } else {
      confirmationError.current.style.display = 'none';
    }

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
    const letterMatch = (password.match(/[a-z, A-Z]/g) || []).length;
    const numberMatch = (password.match(/[0-9]/g) || []).length;
    const specialMatch = (password.match(/[#?!@$%^&*-]/g) || []).length;

    const strength = letterMatch + numberMatch * 2 + specialMatch * 3;
    progressBar.current.style.width = `${strength * 3}%`;
    let color = 'red';
    if (strength > 10) {
      color = 'orange';
    }
    if (strength > 26) {
      color = 'green';
    }
    progressBar.current.style.backgroundColor = color;
  };

  return (
    <div className='form-wrapper'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h2 style={{ marginBottom: '15px', textAlign: 'center' }}>
          Sign up a new user
        </h2>
        <Container fluid>
          <Row>
            <Col sm={6} style={{ marginBottom: '10px' }}>
              <Form.Group>
                <FloatingLabel controlId='firstnamLabel' label='First name'>
                  <Form.Control type='text' placeholder='First name' required />
                </FloatingLabel>
                <Form.Control.Feedback type='invalid'>
                  Do not leave empty
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm={6} style={{ marginBottom: '10px' }}>
              <FloatingLabel controlId='lastnameLabel' label='Last name'>
                <Form.Control type='text' placeholder='Last name' required />
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <FloatingLabel controlId='emailLabel' label='Enter email'>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  required
                  pattern='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
                />
              </FloatingLabel>
              <Form.Text className='text-muted'>
                We'll (hopefully) never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <FloatingLabel controlId='passwordLabel' label='Password'>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  required
                  pattern='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
                  onChange={(e) => handlePasswordChange(e.target.value)}
                />
              </FloatingLabel>
              <div
                style={{
                  height: '24px',
                  marginTop: '5px',
                  backgroundColor: 'hsl(0, 0%, 74%)',
                  borderRadius: '5px',
                }}
              >
                <div
                  ref={progressBar}
                  style={{
                    height: '100%',
                    borderRadius: '5px',
                    maxWidth: '100%',
                  }}
                ></div>
              </div>
              <Form.Text className='text-muted'>
                Must be 8 characters long, contain a number, an uppercase letter
                and a special character.
              </Form.Text>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className='mb-3' controlId='formBasicConfirmation'>
              <FloatingLabel controlId='confirmationLabel' label='Confirmation'>
                <Form.Control
                  type='password'
                  placeholder='Confirmation'
                  required
                  onChange={(e) => setConfirmation(e.target.value)}
                />
              </FloatingLabel>
              <p
                style={{ color: 'red', display: 'none' }}
                ref={confirmationError}
              >
                Password and confirmation are not the same
              </p>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className='mb-3' controlId='formBasicNewsletter'>
              <Form.Check
                type='checkbox'
                label='I want to recieve the newsletter'
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className='mb-3' controlId='formBasicFollow'>
              <Form.Check
                type='checkbox'
                label='I follow @AnesHodza on Twitter'
                required
              />
            </Form.Group>
          </Row>

          <Button variant='primary' type='submit'>
            Register
          </Button>
        </Container>
      </Form>
    </div>
  );
}

export default Form2;