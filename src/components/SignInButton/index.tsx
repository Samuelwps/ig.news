import styles from "./styles.module.scss"
import {FaGithub} from "react-icons/fa"
import {FiX} from "react-icons/fi"

export function SignInButton(){
    const isUserLoggedIn = false

    return isUserLoggedIn ? (
        <button 
        type="button"
        className={styles.SignInButton}
        >
            <FaGithub color="#04d361"/>
            Samuel Ribeiro
            <FiX color="#737380" className={styles.CloseIcon}/>
        </button>
    ) : (
        <button 
        type="button"
        className={styles.SignInButton}
        >
            <FaGithub color="#eba417"/>
            Sign in with Github
        </button>
    )
}