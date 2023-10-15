import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

 const Contact = () => {

  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[msg,setMsg]=useState('')
  

  const sendEmail = (e) => {
    e.preventDefault();
    
    let form=document.querySelector('form')
    setName('')
    setEmail('')
    setMsg('')

    if(form[0].value==='' || form[1].value==='' || form[2].value===''){
      return toast.warn("Please fill  all the fields")
    }
      emailjs.sendForm('service_jao72wc', 'template_m57nk3a', form, '13dAVoPothvOlgySx')
      .then((result) => {
          console.log(result.text);
          toast.success('Message sent Successfully')
          
      }, (error) => {
          console.log(error.text);
      });
        
    
     
  };

  return (
    <div className='container' id='contact'>
       
    <form  onSubmit={sendEmail} >
    <h1>Contact Me</h1>
      <label>Name</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="from_name" placeholder='Enter your name' />
      <label>Email</label>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="from_email" placeholder='Enter your email'/>
      <label>Message</label>
      <textarea name="message" value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder='Enter your message'/>
      <button type='submit'>Send</button>
      
    </form>
    <ToastContainer position='top-center' autoClose={3000} theme='light'
   
    />
    </div>
    
  );
};
export default Contact;
