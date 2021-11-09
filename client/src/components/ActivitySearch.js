import React,{ useState, useEffect} from 'react'

function ActivitySearch({currentUser, currentPlan, setTogglePostSubmit}){
    const [activityMessage, setActivityMessage]= useState({
        name: "",
        address: "",
        start_time: 0,
        end_time: 0,
        description: "",
        user_id: currentUser.id,
        plan_id: currentPlan.id
    });

    const [activityList, setActivityList] = React.useState(null);
    const apiKey = 'AIzaSyCU8INN0qEE_FNI8p_f1WMfMYP9S-ALIbc';

    React.useEffect(() => {
    fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=${apiKey}`,
        {
            crossDomain:true,
            headers: {'Content-Type':'application/json'}
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setActivityList(data);
        });
    }, [activityList]);

    if (!activityList) return null;

    function handleSubmitPost(e){
        e.preventDefault()
        
        fetch('/activities',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(activityMessage)
        })
        setTogglePostSubmit(togglePostSubmit => !togglePostSubmit)
    setActivityMessage({
            name: "",
            address: "",
            start_time: 0,
            end_time: 0,
            description: "",
            user_id: currentUser.id,
            plan_id: currentPlan.id
        })
   }



    function handleOnchange(e){
        const key = e.target.name
        setActivityMessage({...activityMessage, [key]: e.target.value}) 
    }

    return <div className="activity-search-container">
        <h1>hello</h1>
        {/* <form className="authenticated-form" onSubmit={handleSubmitPost}>
            <div className="input-container"> 
                <label>Date: </label>
                <input type="text" name="date" value={planMessage.date} onChange={handleOnchange}></input>
                <label>Start Time: </label>
                <input type="text" name="start_time" value={planMessage.start_time} onChange={handleOnchange}></input>
                <label>End Time: </label>
                <input type="text" name="end_time" value={planMessage.end_time} onChange={handleOnchange}></input>
                <label>Location: </label>
                <input type="text" name="location" value={planMessage.location} onChange={handleOnchange}></input>
            </div>
            <div className="input-container">
                <input type="submit" className="plan-button" value="Create" />
            </div>
        </form> */}
    </div>
}

export default ActivitySearch;