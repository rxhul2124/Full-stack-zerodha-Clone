import React from 'react';
import './TeamCard.css';

function TeamCard({ name, designation, image, bio }) {
  return (
    <div className="col-md-4">
      <div className="text-center p-3">
        <img src={image} alt={name} className="rounded-circle teamCardImage" />
            <div className="card-body">
                <h5 className=" mt-3">{name}</h5>
                <h6 className="text-muted">{designation}</h6>
                <button class="btn" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseExample" 
                aria-expanded="false" 
                aria-controls="collapseExample">
                Bio </button>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">{bio}</div>
                </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
