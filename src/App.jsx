

import './App.css'
import Login from './componets/Login'
import Profile from './componets/Profile'
import UserContextProvider from './Context/Data'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App