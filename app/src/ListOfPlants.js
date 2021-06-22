import React from "react";
import {Link} from 'react-router-dom';
import EditPlant from './EditPlant.js';

const ListOfPlants = props => {

const [listplants, setListplants] = React.useState(props.plants);

const onDelete =(plantId) =>{
  const newList = listplants.filter((item) => item.id !== plantId);
    setListplants(newList);
  }
  
    // Display the plants included by the user
    return (
        <div>     
          <br />
          <Link to ="/addplant">Add new plants</Link>     
          {listplants.map(plant => (
            <div>
              <h1>{plant.id}</h1>
              <p>{plant.nickename}</p>
              <p>{plant.species}</p>
              <p>{plant.h2oFrequency}</p>  

              <Link className="btn" to={`/edit/${plant.id}`}> Edit</Link>

              {/* <button className="btn"  onClick={() =><EditPlant plantObj ={plant}/>}>Edit</button>      */}
              <br />
              <br />
              <button className="btn"  onClick={() => onDelete(plant.id)}>Delete</button> 
            </div>
          ))}
        </div>
      );
};

export default ListOfPlants;
