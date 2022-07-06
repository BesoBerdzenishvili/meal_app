import './header.css'

export default function Header() {
  return (
    <header>
        <button>Profile</button>
        <button>Asc</button>
        <div>
            <button className='headerBtn'>Users</button>
            <button>Log out</button>
        </div>
    </header>
  )
}
