import React from "react";

const ListOfPlants = props => {
    // console.log('Plants',props.plants[1])

    // display the plants included by the user
    return (
        <div>          
          {props.plants.map(plant => (
            <div>
              <h1>{plant.id}</h1>
              <p>{plant.nickename}</p>
              <p>{plant.species}</p>
              <p>{plant.h2oFrequency}</p>
              
             
            </div>
          ))}
        </div>
      );
};

export default ListOfPlants;
