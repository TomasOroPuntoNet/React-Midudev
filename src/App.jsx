
import './App.css'
import UserCard from './Components/UserCard/UserCard'

function App() {
  

  return (
    <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
      <UserCard   isFollowing mail='pepe@maurinho.com' img='willsmith'>Pepardo </UserCard>  
      <UserCard  mail='pepe@maurinho.com' img='Carl'>Pepardol</UserCard>  
      <UserCard isFollowing  mail='pepe@maurinho.com' img='willsmith'>Pepardoz</UserCard>  
    </div>
  )
}

export default App
