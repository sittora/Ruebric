import React from "react";
import PostHandle from "./PostHandle"
import DetailsPostSearch from "./DetailsPostSearch";
import ProfileDetails from "./ProfileDetails";
function DetailsUserSearch({currentSearchUser, currentUser, setTogglePostSubmit}){

const {posts, user_name} = currentSearchUser;
console.log(currentSearchUser)

const displayPost = posts === undefined ? `${user_name} does not have any post yet` : posts.map(post => <PostHandle post={post} currentUser={currentUser} setTogglePostSubmit={setTogglePostSubmit} currentSearchUser={currentSearchUser}/>)

    return <div className="SearchUserDetails">
        <span className="profileSearchUserDetail">
        <h3> You're visiting {user_name}</h3>
        {currentSearchUser.length === 0 || currentSearchUser.profile === null ? null :<ProfileDetails currentUser={currentSearchUser} />}
        </span>
        <div className="SearchPostContainer">
            {displayPost}
        </div>
    </div>
}

export default DetailsUserSearch;