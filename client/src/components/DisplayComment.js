import React,{ useState, useEffect} from 'react';

function DisplayComment({comment, setTogglePostSubmit}){
const {comment_text, comments_author, image_url, like, id} = comment 
const [toggleLikeDislike, setToggleLikeDislike] = useState(false)
const [handleBtnLike, setHandleBtnLike] = useState(like)
function handleDeleteComment(){
    fetch(`/comments/${id}`,{
        method: 'DELETE'
    })
    setTogglePostSubmit(togglePostSubmit => !togglePostSubmit)

}
function handleLikeBtn(){
    
    if (toggleLikeDislike === false){
        setHandleBtnLike( ()=>handleBtnLike + 1)
        setToggleLikeDislike(true)
        
    }
    else{
        setHandleBtnLike(()=>handleBtnLike - 1)
        setToggleLikeDislike(false)
       
    }

}
useEffect(() =>{
    fetch(`/comments/${id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({like: handleBtnLike})
    })
},[handleBtnLike])



return<div>
        <span className="comment-authorName">
            <h4>{comments_author}</h4>
            <button onClick={handleDeleteComment}>x</button>
        </span>
        <p>{comment_text}</p>
        {image_url.length === 0 ? null : <img className="commentPicture" src= {image_url} />}
        <span>
        <p>{handleBtnLike}</p>
        <button onClick={handleLikeBtn}>{toggleLikeDislike === false ? 'like' : 'dislike'}</button>
        </span>
</div>

}

export default DisplayComment;