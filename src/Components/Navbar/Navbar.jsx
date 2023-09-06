import Classes from './Navbar.module.scss'
import { Link } from 'react-router-dom'

function Navbar() {
    const isAuthorized = JSON.parse(localStorage.getItem('isAuthorized'))
    let linkDirection;

    if (isAuthorized == false) {
        linkDirection = '/login'
    } else {
        linkDirection = '/profile'
    }

    return (
        <nav className={Classes.Navbar}>
            <Link to={linkDirection} className={Classes.navbar_item}>
                <img src="/src/assets/profile_icon.svg" alt="" />
                <p>profile</p>
            </Link>

            <Link to='/articles' className={Classes.navbar_item}>
                <img src="/src/assets/articles_icon.svg" alt="" />
                <p>articles</p>
            </Link>

            <Link to='/' className={Classes.navbar_item}>
                <img src="/src/assets/home_icon.svg" alt="" />
                <p>home</p>
            </Link>
        </nav>
    )
}

export default Navbar
