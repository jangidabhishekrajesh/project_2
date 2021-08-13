import { Link } from "react-router-dom";
import { useState } from "react";

let Corporate = () =>{
   const[form, setForm] = useState({
     name:'',
     email:'',
     phone:'',
     company:'',
     companyPhone:'',
     address:'',
     city:''
   })
   const[errors, setErrors] = useState({
    nameErr:'',
    emailErr:'',
    phoneErr:'',
    companyErr:'',
    companyPhoneErr:'',
    addressErr:'',
    cityErr:''
  })
  const handleChange = (e) =>{
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
}
const validate = () =>{
  let nameErr = '';
  let emailErr = '';
  let phoneErr = '';
  let companyErr = '';
  let companyPhoneErr = '';
  let addressErr = '';
  let cityErr = '';

  if(form.name.length <= 3){
    nameErr = "This is required!"
  }
  if (!form.email.includes('@')){
      emailErr = "Enter an valid email!"
  }
  if(form.phone.length <= 10){
      phoneErr = "Phone should be minimum 10 digits! "
  }
  if(form.company.length <= 3){
    companyErr = "This is required!"
  }
  if(form.companyPhone.length <= 3){
    companyPhoneErr = "This is required!"
  }
  if(form.address.length <= 3){
    addressErr = "This is required!"
  }
  if(form.city.length <= 3){
    cityErr = "This is required!"
  }
  if (nameErr||emailErr||phoneErr||companyErr||companyPhoneErr||addressErr||cityErr){
      setErrors({...errors, nameErr, emailErr, phoneErr, companyErr, companyPhoneErr, addressErr, cityErr})
      return false;
  }
  else{
      setErrors({...errors, nameErr, emailErr, phoneErr, companyErr, companyPhoneErr, addressErr, cityErr}) 
  }
  return true;
}
const handleSubmit = (e) =>{
  e.preventDefault();
  const isValid = validate();
  if (isValid){
      // submitToServer();
  }
}
    return (
      <>
      <div className="container">
        <h1 className="container text-center text-dark p-2 mt-5"> <b className="text-warning">FIT | INDIA's</b> GYM CORPORATE WELLNESS PROGRAM</h1> 
        <div className="shadow p-5 mt-4">
          <p className="text-muted">
            <b> Why Physical Fitness Matters</b>
            <br />
            <br />
            A Sedentary Lifestyle And Elevated Stress Levels Are Not Uncommon In Corporate Executives. Insufficient Physical Activity Leads To A Decline In Energy, Stamina And Health, Which Adversely Affects Productivity And Performance. 
            <br />
            <br />
            Aside From Reducing The Risk Of Heart Disease, High Blood Pressure, High Cholesterol, Stroke, Type 2 Diabetes And Certain Types Of Cancer, Regular Exercise Keeps You Energised And Helps You Carry Out Your Daily Activities More Efficiently. 
            <br />
            <br />
            <b>Why Corporate Wellness Programs</b> 
            <br />
            <br />
            Corporate Wellness Programs Not Only Serve To Improve Output, But Also To Enhance Employee Loyalty. They Help Strengthen Team Spirit, Boost Confidence And Workforce Morale.
            <br />
            <br />
            At FIT | INDIA's GYM, We Understand Both The Toll Corporate Lifestyle Can Take On Health, And The Benefits Of Establishing A Personal Fitness Regime. With The Ultimate Goal Of Spreading Fitness Through Well-Rounded Organisations, We Have Developed A Range Of Solutions And Services To Meet The Fitness Requirements Of Corporate Employees.
          </p>
          <p className="text-muted">
            <b>To View FIT | INDIA GYM List, </b><Link to="/signin" style={{color:"orange"}}>View List.</Link>
          </p>
        </div> 
        <h2 className="container text-dark mt-4">REQUEST MORE INFORMATION ABOUT OUR CORPORATE WELLNESS PROGRAM</h2>
        <div className="col-12 text-center mb-5">
        
            <button type="button" class="btn btn-outline-warning mt-4" data-bs-toggle="modal" data-bs-target="#btnRegister">
              Register
            </button>

            <div class="modal fade" id="btnRegister" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="btnRegisterLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header bg-warning">
                    <h5 class="modal-title" id="btnRegisterLabel">Intrested in our corporate solutions?</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form class="row g-3" onSubmit={handleSubmit} noValidate>
                      <div class="col-md-4">
                        <input name="name" type="text" class="form-control" id="inputText" placeholder="Your Name" onChange={handleChange}/>
                        <p className="text-danger">{errors.nameErr}</p>
                      </div>
                      <div class="col-md-4">
                        <input name="email" type="email" class="form-control" id="inputEmail" placeholder="Your Email" onChange={handleChange}/>
                        <p className="text-danger">{errors.emailErr}</p>
                      </div>
                      <div class="col-md-4">
                        <input name="phone" type="Tel" class="form-control" id="inputTel" placeholder="Phone Number" onChange={handleChange}/>
                        <p className="text-danger">{errors.phoneErr}</p>
                      </div>
                      <hr />
                      <h5 className="text-dark text-xs bg-warning p-2">Company Info</h5>
                      <div class="col-md-4">
                        <input name="company" type="text" class="form-control" id="inputText1" placeholder="Company Name" onChange={handleChange}/>
                        <p className="text-danger">{errors.companyErr}</p>
                      </div>
                      <div class="col-md-4">
                        <input name="companyPhone" type="Tel" class="form-control" id="inputTel1" placeholder="Phone Number" onChange={handleChange}/>
                        <p className="text-danger">{errors.companyPhoneErr}</p>
                      </div>
                      <div class="col-md-4">
                        <select id="inputCompany" class="form-select">
                          <option selected>Select Company Type</option>
                          <option>Agriculture</option>
                          <option>Banking</option>
                          <option>Communication</option>
                          <option>Education</option>
                          <option>Ecommerce</option>
                          <option>Finance</option>
                          <option>Government</option>
                          <option>Health Care</option>
                          <option>Insurance</option>
                          <option>Legal</option>
                          <option>Military</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <input name="address" type="text" class="form-control" id="inputAddress" placeholder="Address" onChange={handleChange}/>
                        <p className="text-danger">{errors.addressErr}</p>
                      </div>
                      <div class="col-md-4">
                        <input name="city" type="text" class="form-control" id="inputCity" placeholder="Mumbai" onChange={handleChange}/>
                        <p className="text-danger">{errors.cityErr}</p>
                      </div>
                      <div class="col-md-4">
                        <select id="inputState" class="form-select">
                          <option selected>Maharashtra</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chandigarh">Chandigarh</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                          <option value="Daman and Diu">Daman and Diu</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Lakshadweep">Lakshadweep</option>
                          <option value="Puducherry">Puducherry</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">Himachal Pradesh</option>
                          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Odisha">Odisha</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="West Bengal">West Bengal</option>
                        </select>
                      </div>
                      <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Message</label>
                      </div>
                      <div class="col-12">
                        <button type="submit" class="btn btn-warning">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      </>
    );
  }

export default Corporate;
