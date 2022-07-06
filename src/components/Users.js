import Header from './Header';
import pencil from '../pics/pencil.png';
import './users.css'

export default function Users() {
  return (
    <div>
        <Header />
        <div className='usersList'>
          <div className='userRow' >
            <img src='https://fr-academic.com/pictures/frwiki/74/Jim_Jarmusch.jpg' alt='profile' width='64px'/>
            <h3 className='userName'>JimJaramush</h3>
            <div>
              <button className='userRowBtn'><img src={pencil} alt='pencil' width='10px'/></button>
              <button className='userRowBtn'>X</button>
            </div>
          </div>

          <div className='userRow' >
            <img src='https://fr-academic.com/pictures/frwiki/74/Jim_Jarmusch.jpg' alt='profile' width='64px'/>
            <h3 className='userName'>JimJaramush</h3>
            <div>
              <button className='userRowBtn'><img src={pencil} alt='pencil' width='10px'/></button>
              <button className='userRowBtn'>X</button>
            </div>
          </div>
            <button>Add new user</button>
        </div>
    </div>
  )
}
