import React,{ useState, useEffect} from 'react';

function DisplayActivity({activity, setTogglePostSubmit}){
const {activity_text, activities_author, image_url, like, id} = activity 
const [toggleLikeDislike, setToggleLikeDislike] = useState(false)
const [handleBtnLike, setHandleBtnLike] = useState(like)
function handleDeleteActivity(){
    fetch(`/activities/${id}`,{
        method: 'DELETE'
    }).then(() => {
        setTogglePostSubmit(togglePostSubmit => !togglePostSubmit);
    });
}

return<div className="eachActivity">
        <div className="activity-authorName">
            <h3>{activities_author}</h3>
            <button className="close-activity-button" onClick={handleDeleteActivity}>x</button>
        </div>
        <p className="activity-text">{activity_text}</p>
        {image_url.length === 0 ? null : <img className="activityPicture" src= {image_url} />}
        <div className="likeNumber-and-button">
        <p>{handleBtnLike}</p>
        </div>
</div>

}

export default DisplayActivity;