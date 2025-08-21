import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {
  // const { user, setUser } = useContext(UserContext);
const Theme = useContext(ThemeContext);
  return (
    <div>

      {/* <h2>Hello from ChildC </h2>
      <p>User: {user.name}</p>
      <button onClick={() => setUser({ name: "New Name from ChildC" })}>
        Change Name
      </button> */}
      data:{Theme}
    </div>
  )
}

export default ChildC;
