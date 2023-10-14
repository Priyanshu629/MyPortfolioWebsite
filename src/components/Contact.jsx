import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

 const Contact = () => {
  const form = useRef();
 

  const sendEmail = (e) => {
    e.preventDefault();
    form.current.reset()

    if(form.current.value){
  
    emailjs.sendForm('service_jao72wc', 'template_m57nk3a', form.current, '13dAVoPothvOlgySx')
      .then((result) => {
          console.log(result.text);
          toast.success('Message sent Successfully')
          
      }, (error) => {
          console.log(error.text);
      });
    }
    else{
        toast.warn('All the fields are required',)
    }
     
  };

  return (
    <div className='container' id='contact'>
       
    <form ref={form} onSubmit={sendEmail} >
    <h1>Contact Me</h1>
      <label>Name</label>
      <input type="text" name="from_name" placeholder='Enter your name' />
      <label>Email</label>
      <input type="email" name="from_email" placeholder='Enter your email'/>
      <label>Message</label>
      <textarea name="message" placeholder='Enter your message'/>
      <button>Send</button>
      
    </form>
    <ToastContainer position='top-center' autoClose={3000} theme='light'
   
    />
    </div>
    
  );
};
export default Contact;
