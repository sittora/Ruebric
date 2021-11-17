import React,{ useState, useEffect} from 'react';
import Activity from './Activity';

function ActivitySearch({currentUser, currentPlan, setToggleActivitySubmit}){
    const [searchMessage, setSearchMessage]= useState('')
    const [currentSearchUser, setCurrentSearchUser] = useState([])
    const [activityList, setActivityList] = React.useState();
    const apiKey = 'AIzaSyCU8INN0qEE_FNI8p_f1WMfMYP9S-ALIbc';

    const [searchData, setSearchData]= useState({
        searchText: "",
        location: ""
    });

    function handleOnchange(e){
        const key = e.target.name;
        setSearchData({...searchData, [key]: e.target.value});
    }

    function handleSearchActivity(e){
        e.preventDefault();

        const encodedText = searchData.searchText.split(' ').join('+');
        const encodedLocation = searchData.location.split(' ').join('+');
        console.log('made it here');
        fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodedText}+in+${encodedLocation}&key=${apiKey}`,
        {
            crossDomain:true,
            headers: {'Content-Type':'application/json'}
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(`Got Activities ${data}`);
            setActivityList(data.results);
            setToggleActivitySubmit(toggleActivitySubmit => !toggleActivitySubmit);
            setSearchMessage(`Searching for ${searchData.searchText} in ${searchData.location}`)
            setSearchData({
                searchText: "",
                location: ""
            });
        })
   }

    const activities = [];

    if(activityList === undefined || activityList.status === 404) {
        console.log('No search activities returned')
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

    return <div className="activity-search-container">
        <h1>Activities</h1>

        <h3>{searchMessage !== '' ? searchMessage : ""}</h3>
        
        <form className="authenticated-form" onSubmit={handleSearchActivity}>
            <div className="input-container"> 
                <label>Search Terms: </label>
                <input type="text" name="searchText" value={searchData.searchText} onChange={handleOnchange}></input>
            </div>

            <div className="input-container"> 
                <label>Location: </label>
                <input type="text" name="location" value={searchData.location} onChange={handleOnchange}></input>
            </div>
            <div className="input-container">
                <input type="submit" className="plan-button" value="Search" />
            </div>
        </form>
        {activities}
    </div>
}

export default ActivitySearch;