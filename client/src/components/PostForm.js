import React, { useState }from 'react';


function PostForm({currentUser, setTogglePostSubmit}){
    const [postMessage, setPostMessage]= useState({
        text_post: "",
        image_url: "",
        like: 0,
        user_id: currentUser.id
        })

function handleSubmitPost(e){
    e.preventDefault()
    
    fetch('/posts',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postMessage)
    })
    setTogglePostSubmit(togglePostSubmit => !togglePostSubmit)
   setPostMessage({
        text_post: "",
        image_url: "",
        like: 0,
        user_id: currentUser.id
        })

   }



function handleOnchange(e){
    const key = e.target.name
    setPostMessage({...postMessage, [key]: e.target.value})
        
}
    //   console.log(postMessage)

    return <div>
        <form className="authenticated-form" onSubmit={handleSubmitPost}>
            <div className="input-container"> 
                <label id="descriptionForm" >Description: </label>
                <textarea type="text" id="descriptionBox" className="description-box" name="text_post" value={postMessage.text_post} onChange={handleOnchange} placeholder="Share your thoughts"></textarea>
            </div>
            <div className="input-container"> 
                <label id="urlForm">Url Image: </label>
                <input type="text" id="image_urlBox" className="image-url-box" name="image_url" value={postMessage.image_url} onChange={handleOnchange}></input>
            </div>
            <div className="input-container">
                <input type="submit" className="post-button" value="Post" />
            </div>
        </form>
    </div>
}


export default PostForm;