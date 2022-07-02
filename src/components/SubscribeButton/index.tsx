import styled from "./styled.module.scss"
import { useSession } from 'next-auth/react';
import { signIn } from 'next-auth/react';


export function SubscribeButton(){
    const session = useSession()


    function handleSubscribe(){
        if(!session){
          signIn("github")  
          return;
        }
    }

    return(
        <button
        type="button"
        className={styled.subscribeButton}
        onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    );
}