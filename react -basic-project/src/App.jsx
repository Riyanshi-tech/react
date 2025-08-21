
import './App.css'
import { createContext, useState } from 'react'

import ChildA from './components/ChildA';
const ThemeContext = createContext();

// const UserContext = createContext();

function App() {
  // const [user, setUser] = useState({ name: "Riyanshi" });
const [Theme]= useState('light');
  return (
    <>
    <ThemeContext.Provider value={Theme}>
      < ChildC/>
    </ThemeContext.Provider>
      {/* Pass both user and setUser */}
      {/* <UserContext.Provider value={{ user, setUser }}>
        <ChildA />
      </UserContext.Provider> */}
    </>
  )
}

export default App;
// export { UserContext };
export {ThemeContext};
