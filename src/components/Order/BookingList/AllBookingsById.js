import React from 'react';

const AllBookingsById = ({books}) => {
    return (
      <div className="col-md-4">
            <div class="card" style={{width: "18rem"}}>
        <div class="card-body">
            <h5 class="card-title">{books.service.name}</h5>
            <p class="card-text">{books.service.Description}</p>
            <button class="btn btn-primary">{books.status}</button>
        </div>
    </div>
      </div>
    );
};

export default AllBookingsById;