import { useState } from 'react'
import './UserCard.css'

const UserCard = ({children, mail, img}) =>{
    
    const [isFollowing, setIsFollowing] = useState(true)
    const handleClick = ()=>{setIsFollowing(!isFollowing)}
    const text = isFollowing ? 'Seguir' : 'Dejar de seguir'
    const buttonClassName = isFollowing ? 'user-card-button is-following' : 'user-card-button button'

    return(
  
            <article className={buttonClassName}>
                <header style={{display:'flex', justifyContent: 'center', gap:'10px'}}>
                    <img style={{height: '4rem', borderRadius:'50%'}}src={`https://unavatar.io/instagram/${img}`}></img>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'center'}}>
                        <strong>{children}</strong>
                        <span>{mail}</span>
                    </div>
                </header>
                <aside>
                    <button onClick={handleClick}>
                        {text}
                    </button>
                </aside>
            </article>
    )
}

export default UserCard