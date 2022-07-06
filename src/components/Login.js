import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <label>
            Username: 
            <input type='text' placeholder='username' />
        </label>
        <label className='passLabel'>
            Password: 
            <input type='text' placeholder='password' />
        </label>
        <div>
            <button>Login</button>
            <button>SignUp</button>
        </div>
    </div>
  )
}
