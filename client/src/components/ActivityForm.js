import React, {useState} from 'react';
import DisplayActivity from './DisplayActivity'
function ActivityForm({activity, currentUser, currentPlan, setToggleActivitySubmit, handleClose}){
    const [activityData, setActivityData]= useState({
        name: activity.name,
        address: activity.formatted_address,
        start_time: 0,
        end_time: 0,
        description: "test",
        user_id: currentUser.id,
        plan_id: currentPlan.id
    });
    
    function handleOnchange(e){
        const key = e.target.name;
        setActivityData({...activityData, [key]: e.target.value});
    }

    function handleSubmitActivity(e){
        e.preventDefault()
        
        fetch('/activities',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(activityData)
        }).then(() => {
            setToggleActivitySubmit(toggleActivitySubmit => !toggleActivitySubmit);
            handleClose();
            setActivityData({
                name: activity.name,
                address: activity.formatted_address,
                start_time: 0,
                end_time: 0,
                description: "",
                user_id: currentUser.id,
                plan_id: currentPlan.id
            });
        });
        // todo: add back
        // activities.push(activityData);
   }

   // useEffect(()=>{
    //     fetch(`/plans/${id}`,{
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({})
    //     })
    // },[togglePostSubmit])

    // const showActivities = activities === null ? null : activities.map(activity => <DisplayActivity activity={activity} setTogglePostSubmit={setTogglePostSubmit}/>)

    return <div>
        {/* <div className="activity-form">
            <form className="authenticated-form" onSubmit={handleSubmitActivity}>
                <div className="input-container-for-activities"> 
                    <textarea type="text" className="activity-text-box" name="activity_text" value={activityData.activity_text} onChange={handleOnchange} placeholder={`Activity as ${currentUser.user_name}`} ></textarea>
                </div> */}
            
                {/* {toggleBtn === true ? <div className="input-container"> 
                    <input type="text" className="activity-image-url-box" id="image_urlBox" name="image_url" placeholder="Image URL" value={activityData.image_url} onChange={handleOnchange}></input>
                </div> : null}
                <div className="input-container">
                    <input type="submit" className="leave-activity-button" value="Create an activity" />
                    <button type='button' className="add-image-button" onClick={() => setToggleBtn(toggleBtn => !toggleBtn)}>Add Image</button>
                </div> */}
            
            {/* </form>
        </div> */}

        <form className="authenticated-form" onSubmit={handleSubmitActivity}>
            <div className="input-container"> 
                <label>Name: </label>
                <input type="text" name="name" value={activityData.name} onChange={handleOnchange}></input>
                <label>Address: </label>
                <input type="text" name="address" value={activityData.address} onChange={handleOnchange}></input>
                <label>Start Time: </label>
                <input type="text" name="start_time" value={activityData.start_time} onChange={handleOnchange}></input>
                <label>End Time: </label>
                <input type="text" name="end_time" value={activityData.end_time} onChange={handleOnchange}></input>
                <label>Description: </label>
                <input type="text" name="description" value={activityData.description} onChange={handleOnchange}></input>
            </div>
            <div className="input-container">
                <input type="submit" className="plan-button" value="Create" />
            </div>
        </form>
    
    </div>
}


export default ActivityForm;