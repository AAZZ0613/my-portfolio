import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Message Sent!');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <input 
        {...register("firstName")} 
        placeholder="First Name:" 
        required 
      />
      <input
        {...register("lastName")}
        placeholder="Last Name:"
        required
      />
      <input
        {...register("email")}
        type="email"
        placeholder="Email:"
        required
      />
      <textarea
        {...register("message")}
        placeholder="Message:"
        rows="5"
        required
      />
      <button type="submit">Send Message</button>
    </form>
  );
}