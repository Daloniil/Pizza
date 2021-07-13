import s from './StyleNewSnekContainer/NewSnek.module.css'
import {NavLink} from "react-router-dom";

const NewSnek = (props) => {

    return (
        <li className={s.snek}>
            {props.snek.map(u => <div key={u.id}>
                <NavLink className={s.snek_container} to={"/items/" + u.id}>
                    <div className={s.photo}>
                        <img src={u.photoURL} alt=""/>
                    </div>
                    <div className={s.snek_name}>
                        <span>
                            {u.name}
                        </span>
                        <p>
                           {u.cost} грн
                        </p>
                    </div>
                </NavLink>
            </div>)
            }
        </li>
    )


}
export default NewSnek;