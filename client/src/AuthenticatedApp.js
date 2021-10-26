import react from 'react';


function AuthenticatedApp({setCurrentUser, currentUser}){
    const handleLogout = () => {
        fetch(`/logout`, {
          method: 'DELETE',
          credentials: 'include'
        })
          .then(res => {
            if (res.ok) {
              setCurrentUser(null)
             
            }
          })
      }
    


    return <div>You are now authenticated
        <button onClick={handleLogout}>Logout</button>
    </div>
}


export default AuthenticatedApp;