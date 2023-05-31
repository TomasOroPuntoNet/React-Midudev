import { useState } from 'react'
import './UserCard.css'

const UserCard = ({name, mail, initialIsFollowing}) =>{
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const handleClick = ()=>{setIsFollowing(!initialIsFollowing)}
    const text = isFollowing ? 'Follow' : 'Following'
    const buttonClassName = isFollowing ? 'user-card-button is-following' : 'user-card-button button'

    return(
  
            <article className='card' style={{padding:'20px'}}>
                <header style={{display:'flex', justifyContent: 'center', gap:'10px'}}>
                    <img style={{height: '4rem', borderRadius:'50%'}}src={`https://unavatar.io/instagram/willsmith`}></img>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'center'}}>
                        <strong>{name}</strong>
                        <span>{mail}</span>
                    </div>
                </header>
                <aside>
                    <button className={buttonClassName} onClick={handleClick}>
                        {text}
                    </button>
                </aside>
            </article>
    )
}

export default UserCard