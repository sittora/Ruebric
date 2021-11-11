import React,{ useState, useEffect} from 'react';
import Activity from './Activity';

function ActivitySearch({currentUser, currentPlan, setToggleActivitySubmit}){
    const [toggleSearch, setToggleSearch]= useState(false)
    const [activityMessage, setActivityMessage]= useState(false)
    const [currentSearchUser, setCurrentSearchUser] = useState([])
    const [createActivity, handleCreateActivity] = useState();
    const [activityList, setActivityList] = React.useState();
    const apiKey = 'AIzaSyCU8INN0qEE_FNI8p_f1WMfMYP9S-ALIbc';

    React.useEffect(() => {
    fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurant+in+11231&key=${apiKey}`,
        {
            crossDomain:true,
            headers: {'Content-Type':'application/json'}
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(`Got Activities ${data}`);
            setActivityList(data.results);
        })            
        // });
    }, [toggleSearch]);

    if (!activityList) return null;
    const activities = [];

    if(activityList === undefined || activityList.status === 404) {
        return null;
    }
    else {
        // sort the array ascending
        activityList.sort(function (a, b) {
            return a.rating - b.rating;
        });
        // reverse it
        activityList.reverse();
        // map that to elements in the dom
        activityList.forEach((activity, i) => {
            if (activity.business_status == "OPERATIONAL") {
                
                activities.push(
                    <Activity 
                        key={i} activity={activity}  
                        currentUser={currentUser}
                        currentPlan={currentPlan}
                        setToggleActivitySubmit={setToggleActivitySubmit}
                        currentSearchUser={currentSearchUser}
                    />
                );
                
            }
        });
    }

//     function handleOnchange(e){
//         const key = e.target.name
//         setActivityMessage({...activityMessage, [key]: e.target.value}) 
//     }

    return <div className="activity-search-container">
        <h1>Activities</h1>
        {activities}
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