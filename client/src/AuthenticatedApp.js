import React, {useState} from 'react';


function AuthenticatedApp({setCurrentUser, currentUser}){
  console.log(currentUser)
  const [postMessage, setPostMessage]= useState({
    text_post: "",
    image_url: "",
    like: 0,
    user_id: currentUser.id
  })


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
      function handleSubmitPost(e){
        e.preventDefault()

        fetch('/posts',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(postMessage)
      })

      }
      
      function handleOnchange(e){
        const key = e.target.name
        setPostMessage({...postMessage, [key]: e.target.value})
        
      }
      console.log(postMessage)

    return <div className="login-container">You are now authenticated
      <form className="authenticated-form" onSubmit={handleSubmitPost}>
      <div className="input-container"> 
                <label id="descriptionForm">Description: </label>
                <textarea type="text" id="descriptionBox" name="text_post" value={postMessage.text_post} onChange={handleOnchange}></textarea>
         </div>
      <div className="input-container"> 
                <label id="urlForm">Url Image: </label>
                <input type="text" id="image_urlBox" name="image_url" value={postMessage.image_url} onChange={handleOnchange}></input>
      </div>
      <div class="input-container">
                <input type="submit" value="Post" />
      </div>
      </form>
        <button onClick={handleLogout}>Logout</button>
    </div>
}


export default AuthenticatedApp;