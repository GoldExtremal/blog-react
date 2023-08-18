import Classes from './Profile.module.scss'
import Btn from '../Btn/Btn'
import Navbar from '../Navbar/Navbar'

function Profile() {
    return (
    <div className={Classes.Profile}>
        <Navbar />

        <div className={Classes.profile_container}>
            <div className={Classes.user_data}>
                <div className={Classes.avatar}>
                    <img className={Classes.avatar_img} src="/src/assets/profile_icon.svg" alt="avatar" />
                </div>
                <h3 className={Classes.username}>User</h3>
            </div>
            <Btn name='logout' />
        </div>

    </div>
    )
}

export default Profile
