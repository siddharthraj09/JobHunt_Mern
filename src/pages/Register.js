import { useState, useEffect } from "react";
import { Logo, FormRow,Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  
};

function Register() {
  const [values, setValues] = useState(initialState);
  //global state and useNavigate
   const {isLoading,showAlert}= useAppContext()
  
  const toggleMember =() =>{
      setValues({...values,isMember:!values.isMember})
  }
  const handleChange = (e) => {
   setValues({...values,[e.target.name]:e.target.value})
  
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login":'Register'}</h3>
        {showAlert && <Alert/>}
        {/* name input */}
        {!values.isMember && (   
        <FormRow
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        )}
        {/* email input */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {/* password input */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
            {values.isMember ? 'Not a member yet?':'Already a member'}
            <button type="button" onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register':'Login'}
            </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
