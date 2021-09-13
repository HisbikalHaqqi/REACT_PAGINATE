import React from 'react';

function Posts(props){

    return (
        <div className="container">
            <center className="mb-4 mt-5"><h4>Comment Post</h4></center>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
            {props.data.map((item, index) => {
                return <div key={index}>
                <div className="card" style={{height:"18rem"}} >
                    <div className="card-body">
                    <h5 className="card-title">POST ID: {item.id}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{item.title}</h6>
                    <p className="card-text">{item.body}</p>
                    </div>
                </div>
                </div>
            })}
            </div>
        </div>
    )
}

export default Posts;