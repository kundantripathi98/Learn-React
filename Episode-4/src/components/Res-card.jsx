import { IMG_URL } from '../utils/constants';

let ResCard = (props) => {


    return (
        // <div className="res-card">
        //     <img alt="" srcSet={IMG_URL + props.resData.info.cloudinaryImageId} />
        //     <div className="description">
        //         <div>
        //             <h1>{props.resData.info.name} <span><i className="fa-solid fa-star"></i> {props.resData.info.avgRating}</span></h1>
        //         </div>
        //         <h2>{props.resData.info.costForTwo}</h2>
        //         <h3> &#x2022; {props.resData.info.sla.slaString}</h3>
        //         <h4>{props.resData.info.cuisines.join(", ")}</h4>
        //         <h5>{`${props.resData.info.locality}, ${props.resData.info.areaName}`}</h5>
        //     </div>
        // </div>

        <div className="res-card">
        <img alt="image" srcSet="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/502d6ccc803e95343d0324b15f8639da" />
        <div className="description">
            <div>
                <h1>Restaurant name<span><i className="fa-solid fa-star"></i> 4.2</span></h1>
            </div>
            <h2>loda</h2>
            <h3> &#x2022; sjdfsakjd</h3>
            <h4>kdjskd</h4>
            <h5>dkjvbasdjvbs</h5>
        </div>
        </div>
    );
}

export default ResCard;