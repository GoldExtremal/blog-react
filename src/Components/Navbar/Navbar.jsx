import Classes from './Navbar.module.scss'

function Navbar() {
    
    return (
        <ul className={Classes.Navbar}>
            <li className={Classes.navbar_item}>
                <img src="/src/assets/profile_icon.svg" alt="" />
                <p>profile</p>
            </li>

            <li className={Classes.navbar_item}>
                <img src="/src/assets/articles_icon.svg" alt="" />
                <p>articles</p>
            </li>

            <li className={Classes.navbar_item}>
                <img src="/src/assets/home_icon.svg" alt="" />
                <p>home</p>
            </li>
        </ul>
    )
}

export default Navbar
