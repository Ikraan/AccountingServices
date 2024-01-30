import React, {useState} from 'react'

export const Register = ({ onFormSwitch, onRegister}) =>  {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name)
        localStorage.setItem('registeredUsername', name);
        onRegister(name);
    }
  return (
    
      <>
      <div className='register-form'>
        <h2>Register</h2>
        <form className='register-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Full name</label>
        <input value={name} name='name' id='name' type='name' autoComplete='name' onChange={(e) => setName(e.target.value)} placeholder='Full name' />
        <label htmlFor='email'>Email</label>
        <input value={email} type='email' autoComplete='email' onChange={(e) => setEmail(e.target.value)} placeholder='youremail@outlook.com' id='email' name='email'/>
        <label htmlFor='password'>Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='*********' id='password' name='password' />
        <button type='submit'>Log in </button>
      </form>
      <button className='link-btn' onClick={() => onFormSwitch('login')}>Already have an account? Login here. </button>
      </div>

      </>
    
  )
}

