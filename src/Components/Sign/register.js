import React,{useState} from 'react'


function Register() {
    const [form,setForm] = useState({
        firstName : '',
        email : '',
        password : '',
        phoneNumber : '',
    })
    const [errors,setErrors]  = useState({
        firstNameErr : '',
        emailErr : '',
        passwordErr : '',
        phoneNumberErr : '',
    })
    const handleChange = (e)=>{
       setForm({...form,[e.target.name]:e.target.value}) 
       console.log(form)
    }

    const validate = ()=>{
        let  firstNameErr = '';
        let emailErr = '';
        if(form.firstName.length<4){
            // debugger;
            firstNameErr = "Name should be min 4";
        }
        // sivagmail.com
        if(!form.email.includes('@')){
            // debugger;
            emailErr = "Enter a valid email id"
        }
        if(firstNameErr || emailErr){
            setErrors({...errors,firstNameErr,emailErr})
            return false;
        }
        return true;
        console.log(errors)
    }
    const handleSubmit = (e)=>{
    e.preventDefault();
    const isValid = validate();
    if(isValid){
        // submitToServer();
    }
    
    }
    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <input name="firstName" type="text" placeholder="username"  
                onChange={handleChange} />
                <p>{errors.firstNameErr}</p>
                <input name="email" type="email" placeholder="email"
                onChange={handleChange}
                />
                <p>{errors.emailErr}</p>
                <input name="password" type="password" placeholder="password"
                onChange={handleChange}
                />
                <input name="phoneNumber" type="tel" placeholder="phone" 
                onChange={handleChange}
                />
                <button type="submit">Register</button>

            </form>
        </div>
    );
}

export default Register
