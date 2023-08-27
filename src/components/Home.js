import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteNewsItem } from "../store/createSlice";
import Navbar from "./Navbar";
function Home(){
    const news = useSelector((state) => state.news.items);
    const dispatch = useDispatch();
    const handleDeleteNewsItem = (itemId) => {
        dispatch(deleteNewsItem(itemId));
    };
    return(
        <div className="container-fluid">
            <Navbar></Navbar>
            <Link to={'/add'} className="btn btn-info mt-2 pl-4 pr-4 "style={{float:"right",color:"black"}}>Add News</Link>
            <div className="row mt-5">
            {news.map((x) => (
                <div className="new" key={x.id}>
                    <div className="col-12 mt-5">
                    <div className="card ml-0 mr-0 mb-2 pl-5">
                        <div className="card-title">
                            <h2 style={{float:'left'}} >{x.title}</h2>
                            <button className="btn bg-info" style={{float:'right'}} onClick={() => handleDeleteNewsItem(x.id)}>Delete</button>
                            <Link to={'/edit/'+x.id} className="btn btn-info pl-4 pr-4 mb-2"style={{float:"right",color:"black"}}>Edit</Link>
                        </div>
                        <div className="card-body">
                            <p>{x.detail}</p>
                        </div>
                    </div>
                    </div>
                </div>
            
            ))}
            </div>
        </div>
    )
}

export default Home;
                    