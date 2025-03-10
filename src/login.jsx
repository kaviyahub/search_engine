import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUser = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const log = () => {
    navigate("/homepage");
  };

  return (
    <>
  <center style={{ marginTop: "150px" }}>
    <div className='login'>
      <form>
         <h4 style={{ fontFamily: "cursive", paddingTop: "40px", color: "darkblue", textDecoration: "underline" }}>Login </h4>
         <br/>

      {/* Username */}
          <div style={{ position: 'relative', marginBottom: '20px', width: '250px' }}>
            <input style={{
                  width: '100%',
                  border: "1px solid #ccc",
                  fontFamily: "cursive",
                  fontSize: "15px",
                  paddingRight: "30px", 
                  paddingLeft: "30px", 
                  height: "30px",}}
            type ='text' placeholder='Username' value={username} onChange={handleUser}/>
           <i className="fa fa-user" style={{
                  position: 'absolute',
                  left: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '18px',
                  color: 'gray',
                }}></i>
          </div>
            

       {/* Password */}
          <div style={{ position: 'relative', marginBottom: '20px', width: '250px' }}>
              <input style={{
                  width: '100%',
                  border: "1px solid #ccc",
                  fontFamily: "cursive",
                  fontSize: "15px",
                  paddingRight: "30px", // Padding for space for icon
                  paddingLeft: "30px", // Padding for text space
                  height: "30px",
                }}
                type='password' placeholder='Password' value={password} onChange={handlePassword} />
              <i className="fa fa-lock" style={{
                  position: 'absolute',
                  left: '10px', // Positioned inside the input box on the right side
                  top: '3%',
                  transform: 'translateY(30%)', // Vertically center the icon
                  fontSize: '18px',
                  color: 'gray',
                }}></i>
          </div>

          <p style={{ fontSize: "14px", color: "blue", marginLeft: "140px" }}>forgot password? </p>

      {/* Submit Button */}
       <button style={{
                fontFamily: "cursive",
                border: "none",
                color: "darkblue",
                marginTop: "10px",
                fontSize: "17px",
              }} type="button" onClick={log} > Submit </button>
      </form>
   </div>
  </center>
    </>
  );
};

export default Login;
