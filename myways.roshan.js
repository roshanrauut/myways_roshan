import React, {useState } from 'react';

function ContactForm(){
     const[name, setName] = useState(' ');
     const[email, setEmail] = useState(' ');
     const[phone, setPhone] = useState(' ');
     const[errorMessage, setErrorMessage]} = useState(' ');
     const[successMessage, setSuccesMessage]=useState('');

     async function handlesubmit(e) {
        e.preventDefault();
        if (!name || !email || !phone){}     {}
 
          setErrorMessage('Please fill the required fileds.');
           return;
     }

      try{
       const getUserResponse = await fetch('https://example.com/user?email={(email');
       const userData = await getUserResponse.json();
      if(userdata.length > 0 ) {
    seterrorMessage('user already exits.');
    return;
    }
     
    //create new user
    const createusername = await fetch('https://example.com/user',{
        method:'POST',
        headers:{'content-Type': 'application/json'},
        body:JSON.stringify({name,email,phone})
});
if(icreateduserresponse.ok) {
    throw new error('failed to create user.');
}
setsuccessMessage('user created succesfully.');
setName('');
setEmail('');
setPhone('');
}catch (error) {
    setErrorMessage(error.Message);
}
}
return (
    <form onsubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" value={name} onchange={(e)=>setName(e.target.value)}
           </label>
        <label>
        email:
        <input type="email" value{email} onchange=[(e) => setEmail(e.target.value)]
        </label>
        <label>
        phone:
        <input type="tel" value={phone} onchange={(e)}=>setPhone(e.target.value)}
        </label>
        {errormessage && <div>{errormessage}</div>}
        {successMessage && <div>{successMessage}</div>}
        <button type="submit">submit</button>
    </form>
    );
    }
    export default contactForms;