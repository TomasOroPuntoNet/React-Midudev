
import './App.css'
import UserCard from './Components/UserCard/UserCard'

  function App() {
    const users = [
      {name: 'Pepe',
      mail:'pepeargento@gmail.com',
      isFollowing: true
      },
      {name: 'Moni',
      mail:'moniargento@gmail.com',
      isFollowing: true
      },
    ]

  return (
    <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
      {users.map(({isFollowing, name,mail})=>{
        return(
          <UserCard name={name} mail={mail} initialIsFollowing={isFollowing} key={name}/>
        )
      })}
    </div>
  )
}

export default App
