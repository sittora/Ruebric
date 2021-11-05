import React, {useState} from 'react';
import DisplayActivity from './DisplayActivity'
function ActivityForm({activities, idPost, currentUser,  setTogglePostSubmit}){
    const [activityData, setActivityData]= useState({
        activity_text: "",
        image_url: "",
        like: 0,
        user_id: currentUser.id,
        post_id: idPost,
        activities_author: currentUser.user_name
        })
    const [toggleBtn, setToggleBtn]= useState(false)
    
function handleOnchange(e){
    const key = e.target.name
    setActivityData({...activityData, [key]: e.target.value})
}
function handleSubmitActivity(e){
    e.preventDefault()
    
    fetch('/activities',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(activityData)
    })
    setTogglePostSubmit(togglePostSubmit => !togglePostSubmit)
    activities.push(activityData)
    setActivityData({
    
        activity_text: "",
        image_url: "",
        like: 0,
        user_id: currentUser.id,
        post_id: idPost,
        activities_author: currentUser.user_name
   })

   }

    const showActivities = activities === null ? null : activities.map(activity => <DisplayActivity activity={activity} setTogglePostSubmit={setTogglePostSubmit}/>)

    return <div>
        <div className="activity-container">
            {showActivities}
        </div>
        <div className="activity-form">
            <form className="authenticated-form" onSubmit={handleSubmitActivity}>
            <div className="input-container-for-activities"> 
                
                <textarea type="text" className="activity-text-box" name="activity_text" value={activityData.activity_text} onChange={handleOnchange} placeholder={`Activity as ${currentUser.user_name}`} ></textarea>
                
            </div>
           
                {toggleBtn === true ? <div className="input-container"> 
                    <input type="text" className="activity-image-url-box" id="image_urlBox" name="image_url" placeholder="Image URL" value={activityData.image_url} onChange={handleOnchange}></input>
                </div> : null}
                <div className="input-container">
                    <input type="submit" className="leave-activity-button" value="Create an activity" />
                    <button type='button' className="add-image-button" onClick={() => setToggleBtn(toggleBtn => !toggleBtn)}>Add Image</button>
                </div>
            
        </form>
        </div>
    
</div>
}


export default ActivityForm;