import React,{ useState, useEffect} from 'react';

function SearchUser({setSearchUser, setToggleSeach, setToggleUserDetail}){

const [search, setSearch] = useState()


function handleSearchSubmit(e){
    e.preventDefault();
    console.log(search);
   
        fetch('/users')
    .then(r => r.json())
    .then(userData => {
        
        const filterSearch = userData === undefined || search === undefined? null : userData.filter(user => user.user_name.toLowerCase().includes(search.toLowerCase()))
        setSearchUser(filterSearch)
        
    })
    setToggleUserDetail(false)
    setToggleSeach(true)
    setSearch("")
   
}



    return <div className="inputSearch">
        <form onSubmit={handleSearchSubmit}>
        <label className="search-user-text">Search User: </label>
        <input className="searchBar" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <input type="submit"  className="search-button" value="Search" />
        </form>
    </div>
}


export default SearchUser;