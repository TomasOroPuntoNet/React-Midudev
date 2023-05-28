import { Children } from "react"


const UserCard = ({children, mail, img}) =>{
    return(
        <article style={{display: "flex", justifyContent: 'center', flexDirection:'row', alignItems: 'center', gap:'40px', backgroundColor:"black", padding:'10px', borderRadius:'1rem'}}>
            <header style={{display:'flex', justifyContent: 'center', gap:'10px'}}>
                <img style={{height: '4rem', borderRadius:'50%'}}src={`https://unavatar.io/instagram/${img}`}></img>
                <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'center'}}>
                    <strong>{children}</strong>
                    <span>{mail}</span>
                </div>
            </header>
            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>
    )
}

export default UserCard