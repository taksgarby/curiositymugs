import { Link } from "react-router-dom";
import React, { useRef } from "react";
import Form from 'react-bootstrap/Form';
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import '../styles/Form.css';
import Button from 'react-bootstrap/Button';

const PaymentForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('contact_service', 
                         'contact_form', 
                         form.current, 
                         'B0fuwYAe33M0M45Iv'
                         )
          .then((result) => {
              console.log(result.text);
              console.log("message sent")
              e.target.reset();
    
              swal({
                title: "Success!",
                text: "Thank you for submitting your ideas",
                icon: "success",
                button: "Continue",
              });
    
          }, (error) => {
              console.log(error.text);
          });
      };
    
    return ( 
        <>
 
          <div class="form">
            <Form ref={form} onSubmit={sendEmail}>
            <p class="form-text">Please complete the form</p>
            <label>Your Name</label>
            <input type="text" name="user_name" id='text-input' placeholder="Please enter your name" required/>
            <label>Your Email</label>
            <input type="email" name="user_email" id='text-input' placeholder='Please enter your email address' required/>
           
            <div className="button-container">
            <div className="center">
            <button type='submit'>
            Submit
          </button>
          </div>
          </div>
       

           </Form>
        </div>   
  
       </>
     );
}
 
export default PaymentForm;

