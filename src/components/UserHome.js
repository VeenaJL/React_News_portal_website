import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
function UserHome(){
    const news = useSelector((state) => state.news.items);

    return(
        <div className="container-fluid">
            <Navbar></Navbar>
            <div className="row float-right">
            <Link to={'/login'} className="btn btn-info mt-2 pl-4 pr-4 mr-4"style={{float:"right",color:"black"}}>Login as Admin</Link>
            </div>
            {news.map((x) => (
                <div className="row" key={x.id}>
                    <div className="col-12 mt-5">
                    <div className="card ml-3 mr-4 mt-4 mb-2 pl-5">
                        <div className="card-title">
                            <h5>{x.title}</h5>
                        </div>
                        <div className="card-body">
                            <p>{x.detail}</p>
                        </div>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UserHome;
                    