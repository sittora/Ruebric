import React, {useState} from 'react';
import DisplayComment from '../components/DisplayComment'
function CommentForm({comments, idPost, currentUser,  setTogglePostSubmit}){
    const [commentData, setcommentData]= useState({
        comment_text: "",
        image_url: "",
        like: 0,
        user_id: currentUser.id,
        post_id: idPost,
        comments_author: currentUser.user_name
        })
    const [toggleBtn, setToggleBtn]= useState(false)
    
function handleOnchange(e){
    const key = e.target.name
    setcommentData({...commentData, [key]: e.target.value})
}
function handleSubmitComment(e){
    e.preventDefault()
    
    fetch('/comments',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(commentData)
    })
    setTogglePostSubmit(togglePostSubmit => !togglePostSubmit)
    comments.push(commentData)
    setcommentData({
    
        comment_text: "",
        image_url: "",
        like: 0,
        user_id: currentUser.id,
        post_id: idPost,
        comments_author: currentUser.user_name
   })

   }

    const showComments = comments === null ? null : comments.map(comment => <DisplayComment comment={comment} setTogglePostSubmit={setTogglePostSubmit}/>)

    return <div>
        <div className="comment-container">
            {showComments}
        </div>
        <div className="comment-form">
            <form className="authenticated-form" onSubmit={handleSubmitComment}>
            <div className="input-container-for-comments"> 
                
                <textarea type="text" className="comment-text-box" name="comment_text" value={commentData.comment_text} onChange={handleOnchange} placeholder={`Comment as ${currentUser.user_name}`} ></textarea>
                
            </div>
           
                {toggleBtn === true ? <div className="input-container"> 
                    <input type="text" className="comment-image-url-box" id="image_urlBox" name="image_url" placeholder="Image URL" value={commentData.image_url} onChange={handleOnchange}></input>
                </div> : null}
                <div className="input-container">
                    <input type="submit" className="leave-comment-button" value="Leave a comment" />
                    <button type='button' className="add-image-button" onClick={() => setToggleBtn(toggleBtn => !toggleBtn)}>Add Image</button>
                </div>
            
        </form>
        </div>
    
</div>
}


export default CommentForm;