import Btn from '../Btn/Btn'
import Classes from './Login.module.scss'

function Login() {

    return (
        <div className={Classes.Login}>
            <div className={Classes.side_part}>
                <p className={Classes.side_text}>Login</p>
            </div>

            <div className={Classes.form_part}>
                <div className={Classes.form_description}>
                    <h3 className={Classes.form_title}>Welcome</h3>
                    <p className={Classes.description_text}>Let’s log you in quickly</p>
                </div>
                <form className={Classes.form}>
                    <input className={Classes.form_input} type="text" placeholder='Enter your nickname' />
                    <input className={Classes.form_input} type="password" placeholder='Enter your password' />
                    {/* <button className={Classes.form_btn}>login</button> */}
                    {/* <Btn name='login'/> */}
                    <Btn name='login'/>
                </form>
            </div>
        </div>
    )
}

export default Login
