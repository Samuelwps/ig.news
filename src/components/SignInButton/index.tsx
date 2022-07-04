import styles from "./styles.module.scss"
import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"

import { signIn, signOut, useSession } from "next-auth/react"

export function SignInButton(){
    const { data:session } = useSession()

    return session ? (
        <button 
        type="button"
        className={styles.SignInButton}
        >
            <FaGithub color="#04d361"/>
            {session.user.name}
            <FiX color="#737380" className={styles.CloseIcon} onClick={() => signOut()}/>
        </button>
    ) : (
        <button 
        type="button"
        className={styles.SignInButton}
        onClick={() => signIn("github")}
        >
            <FaGithub color="#eba417"/>
            Sign in with Github
        </button>
    )
}