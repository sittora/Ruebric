import React,{ useState, useEffect} from 'react'
import CommentForm from './CommentForm'

function PostHandle({post, currentUser, setTogglePostSubmit}){
    const {image_url, like, text_post, id, comments} = post
    console.log(post)
    const [handleLike, setHandleLike]= useState(like)
    const [handleBtnLike, setHandleBtnLike] = useState(false)
    const [handleBtnComment, setHandleBtnComment] = useState(false)
    function handleLikeBtn(){
        if (handleBtnLike === false){
            setHandleLike( ()=>handleLike + 1)
            setHandleBtnLike(true)
            
        }
        else{
            setHandleLike(()=>handleLike - 1)
            setHandleBtnLike(false)
           
        }
        
    }
    function handleCommentbtn(){
        setHandleBtnComment(handleBtnComment => !handleBtnComment)
    }

    useEffect(()=>{
        fetch(`/posts/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({like: handleLike})
        })
    },[handleLike])
function handleDeletePost(){
        fetch(`/posts/${id}`,{
            method: 'DELETE'
        })
    
        setTogglePostSubmit(togglePostSubmit => !togglePostSubmit)
    
}


    
    return <div className="eachPostContainer">
        <span >
            <h3>{currentUser.user_name}</h3>
            <button className="delete-button" onClick={handleDeletePost}>Delete</button>
            <p>{text_post}</p>
            {image_url === "" ? null : <img src={image_url} alt={currentUser.user_name} className="imageContainer"></img>}
            
        </span>
        <span className="likeAndComment">
        <p>{handleLike}</p>
        <p>{comments.length}</p>
        </span>
        <span className="likeAndCommentBtn">
            <button className="like-button" onClick={handleLikeBtn}>{handleBtnLike === false ? 'Like' :'Dislike'}</button>
            <button className="comment-button" onClick={handleCommentbtn}>Comment</button>
        </span>
        {handleBtnComment === true ? <CommentForm currentUser={currentUser} comments={comments} idPost={id}  setTogglePostSubmit={setTogglePostSubmit}/>  : null}
    </div>


}


export default PostHandle