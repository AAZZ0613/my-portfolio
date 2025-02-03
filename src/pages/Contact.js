/* Contact.js */
/* Student name: Rui Sun */
/* Student Number: 301480676 */
/* Date: 2025-02-02 */
/* Description: This is the Contact page of the website. 
It contains a form that allows users to send a message to the website owner. 
The form contains fields for the user's first name, last name, email, and message.
 When the form is submitted, the data is logged to the console and an alert is displayed to the user.
The user is then redirected to the home page. */

// Importing necessary hooks and libraries for routing and form handling
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation
import { useForm } from 'react-hook-form'; // Importing useForm hook for form validation
import './Contact.css'; // Importing the CSS styles for the Contact page

// Contact functional component
export default function Contact() {
  // useNavigate hook to programmatically navigate the user
  const navigate = useNavigate();

  // useForm hook for managing form state and validation
  const { register, handleSubmit } = useForm();

  // onSubmit function to handle form submission
  const onSubmit = (data) => {
    console.log('Form Data:', data); // Logs the form data to the console
    alert('Message Sent!'); // Displays a message to the user
    navigate('/'); // Redirects the user to the home page after form submission
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1> {/* Heading for the Contact form */}
      {/* Form with onSubmit handler for form submission */}
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        {/* Input group for first name */}
        <div className="input-group">
          <input 
            {...register("firstName")} // Registers the field with react-hook-form
            placeholder="First Name"
            required // Makes this field mandatory
            className="input-field"
          />
        </div>

        {/* Input group for last name */}
        <div className="input-group">
          <input
            {...register("lastName")}
            placeholder="Last Name"
            required
            className="input-field"
          />
        </div>

        {/* Input group for email */}
        <div className="input-group">
          <input
            {...register("email")}
            type="email" // Specifies email type for validation
            placeholder="Email"
            required
            className="input-field"
          />
        </div>

        {/* Input group for message */}
        <div className="input-group">
          <textarea
            {...register("message")}
            placeholder="Message"
            rows="5" // Specifies the height of the textarea
            required
            className="input-field"
          />
        </div>

        {/* Submit button to send the message */}
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}
