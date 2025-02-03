/*Contact.js*/
/*Student name: Rui Sun */
/*Student Number: 301480676*/
/*Date: 2025-02-02*/
/*Description: This is the Contact page of the website. 
It contains a form that allows users to send a message to the website owner. 
The form contains fields for the user's first name, last name, email, and message.
 When the form is submitted, the data is logged to the console and an alert is displayed to the user.
The user is then redirected to the home page.*/
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Contact.css';

export default function Contact() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Message Sent!');
    navigate('/');
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="input-group">
          <input 
            {...register("firstName")} 
            placeholder="First Name"
            required 
            className="input-field"
          />
        </div>
        <div className="input-group">
          <input
            {...register("lastName")}
            placeholder="Last Name"
            required
            className="input-field"
          />
        </div>
        <div className="input-group">
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            required
            className="input-field"
          />
        </div>
        <div className="input-group">
          <textarea
            {...register("message")}
            placeholder="Message"
            rows="5"
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}
