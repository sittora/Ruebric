import React,{ useState, useEffect} from 'react';

function DisplayActivity({activity, setTogglePostSubmit}){
const {activity_text, activities_author, image_url, like, id} = activity 
const [toggleLikeDislike, setToggleLikeDislike] = useState(false)
const [handleBtnLike, setHandleBtnLike] = useState(like)
function handleDeleteActivity(){
    fetch(`/activities/${id}`,{
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
    fetch(`/activities/${id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({like: handleBtnLike})
    })
},[handleBtnLike])



return<div className="eachActivity">
        <div className="activity-authorName">
            <h3>{activities_author}</h3>
            <button className="close-activity-button" onClick={handleDeleteActivity}>x</button>
        </div>
        <p className="activity-text">{activity_text}</p>
        {image_url.length === 0 ? null : <img className="activityPicture" src= {image_url} />}
        <div className="likeNumber-and-button">
        <p>{handleBtnLike}</p>
        <button className="like-dislike-btn" onClick={handleLikeBtn}>{toggleLikeDislike === false ? '❤' : '❤'}</button>
        </div>
</div>

}

export default DisplayActivity;