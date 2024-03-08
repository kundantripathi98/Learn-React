import ResCard from "./Res-card";

let Body = () => {
    return <div className="main">
            <div className="filter">
                <input type="text" name="" id="searchBox" placeholder="Search Here!"/> 
                <button>Search</button>
                <button>Top Rated Restaurants</button>
                <button>Least Rated Restaurants</button>
            </div> 

            <div className="card-container">
                 <ResCard />
                 <ResCard />
                 <ResCard />
                 <ResCard />
                 <ResCard />
                 <ResCard />
            </div>
    </div>
}

export default Body;