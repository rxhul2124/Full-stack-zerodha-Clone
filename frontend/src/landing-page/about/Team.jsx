import React from 'react';
import TeamCard from './TeamCard';
import TeamDetails from '../../data/teamData';


function Team() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        {
            TeamDetails.map((team)=>(
                <TeamCard key={team.id} 
                name={team.name}
                designation={team.designation}
                image={team.image}
                bio={team.bio}
                />
            ))
        }
      </div>
    </div>
  );
}

export default Team;
