import './UserInfo.css';
import avatar from '../pics/genericAvatar.png';

export default function UserInfo() {
  return (
    <div className='userInfo'>
        <img src={avatar} width='324px' alt='generic avatar mannequin' />
        <div className='labelContainer'>
            <label className='label'>
                Upload image: 
                <input type='file' />
            </label>
            <label className='label'>
                Username: 
                <input type='text' placeholder='username' />
            </label>
            <label className='label'>
                Password: 
                <input type='password' placeholder='password' />
            </label>
            <label className='label'>
                Confirm password: 
                <input type='password' placeholder='confirm password' />
            </label>
        </div>
        <button>Submit</button>
    </div>
  )
}
