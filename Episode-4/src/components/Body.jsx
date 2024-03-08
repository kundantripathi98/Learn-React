import ResCard from "./Res-card";

let Body = () => {
    return <>
            <div className="filter">
                <input type="text" name="" id="searchBox" placeholder="Search Here!"/> 
                <button>Search</button>
                <button>Top Rated Restaurants</button>
                <button>Least Rated Restaurants</button>
            </div> 
        <ResCard />
    </>
}

export default Body;