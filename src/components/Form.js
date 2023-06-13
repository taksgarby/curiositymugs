import { Link } from "react-router-dom";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import '../styles/Form.css';

const Form = () => {

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
            <form ref={form} onSubmit={sendEmail}>
            <p class="form-text">Please let us know what kind of mugs you would like to see!</p>
            <label>Your Name</label>
            <input type="text" name="user_name" id='text-input' placeholder="Please enter your name" required/>
            <label>Your Email</label>
            <input type="email" name="user_email" id='text-input' placeholder='Please enter your email address' required/>
            <label>Message</label>
            <textarea type="text" name="message" cols='30' rows='10' id='text-input'  required/>
            {/* <div class="send-button"> */}
            <button type="submit" class="send-button">Send</button>
          {/* </div> */}
           </form>
        </div>     
       </>
     );
}
 
export default Form;

