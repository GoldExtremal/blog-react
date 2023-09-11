/* eslint-disable react/prop-types */
import Classes from './Btn.module.scss'

function Btn(props) {

    return (
        <button type='button' className={Classes.Btn}>{props.name}</button>
    )
}

export default Btn
