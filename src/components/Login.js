import React, {useState} from 'react'

export const Login = (props) => {
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState(localStorage.getItem('registeredUsername') || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }
  return (
      <>
      <div className='login-form'>
        <h2>Login</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input value={email} type='email' autoComplete='email' onChange={(e) => setEmail(e.target.value)} placeholder='youremail@gmail.com' id='email' name='email'/>
        <label htmlFor='password'>Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='*********' id='password' name='password' />
        <button type='submit'>Login </button>
      </form>
      <button className='link-btn1' onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here. </button>
     </div> 
     
     </>
  )
}

