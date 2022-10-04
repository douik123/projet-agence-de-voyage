import { useState } from "react";
import * as React from 'react';
import Alert from '@mui/material/Alert';
function Contact() {
    const[info,setInfo]=useState(
        {
          name:"",
          email:"",
          number:"",
          message:""
        }
      )
    const[errors,setErrors]=useState({})
    const[showAlert,setShowAlert]=useState(false)
      const handlechange =(e)=>{
        setInfo({
            ...info,[e.target.name]:e.target.value
        })
      }
      const confirmation=(e)=>
      {
       let errorsTemp={};
       if(info.name.length<3)
       {
        errorsTemp.name="Nom invalide."
       }
       if((info.email.length<10)||(!(info.email.includes("@"))))
       {
        errorsTemp.email="Email invalide."
       }
       if((isNaN(info.number))||(info.number.length<8))
       {
        errorsTemp.number="Number invalide."
       }
       if(info.message.length<5)
       {
        errorsTemp.message="Message invalide."
       }
       setErrors(errorsTemp)
       if (Object.keys(errorsTemp).length === 0) 
       {
        setShowAlert(true)
        e.preventDefault();
       }
       console.log(errorsTemp)
      }
    console.log(info.name)
    return (
      <div className="Contact">
 <form class="form">
  <h2 className="TitleContact">CONTACT US</h2>
  <p type="Name:"><input id="name" className="InputContact" placeholder="Write your name here.."   required minlength="3" name="name" value={info.name} onChange={handlechange}/></p>
  {
    errors.name && <p>{errors.name}</p>
  }
  <p type="Email:"><input className="InputContact" placeholder="Let us know how to contact you back.." required minlength="10" name="email" value={info.email} onChange={handlechange}/></p>
  {
    errors.email && <p>{errors.email}</p>
  }
  <p type="Phone Number :"><input className="InputContact" placeholder="Write your phone number here.."  required minLength="8" name="number" value={info.number} onChange={handlechange}/></p>
  {
    errors.number && <p>{errors.number}</p>
  }
  <p type="Message:"><input className="InputContact" placeholder="What would you like to tell us.." required minlength="5" name="message" value={info.message} onChange={handlechange}/></p>
  {
    errors.message && <p>{errors.message}</p>
  }
  <button className="SubmitContact" onClick={confirmation}>Send Message</button>
  {
    showAlert && <Alert severity="success">This is a success alert</Alert>
  }
</form>
      </div>
    );
  }
  
  export default Contact;
  