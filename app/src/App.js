
import { Route , Switch ,Link} from 'react-router-dom';
import axios from 'axios';

import './App.css';
import PlantForm from './PlantForm.js';
import ListOfPlants from './ListOfPlants.js';
import EditPlant from './EditPlant.js';
import UserForm from './UserForm.js';



function App() {

// temporary state used to set state
// const [post, setPost] = useState([]);

// server error
// const [serverError, setServerError] = useState("");

// We save the list of plants passed by the user
const [listofPlants, setListofPlants] =useState([
    {
      id: "",
      nickname: "",
      species:"",
      h2oFrequency:"",
      image:""
    }
    ]);

// Add new plant to the list of plants the user has chosen
const addNewPlant =(plant) =>{

  const newPlant = {
      id: plant.id,
      nickename: plant.nickname,
      species:plant.species,
      h2oFrequency: plant.h2oFrequency,
      image:plant.image
  }

  setListofPlants([...listofPlants,newPlant]); // use spread operator to submit the new plant
  console.log('listofPlants',listofPlants)
};


// Submit list of flowers enterd by user

  const submitFlowersForm = event =>{
        // console.log('new plant event', plant)
        event.preventDefault();
          // clear state, could also use 'initialState' here
          setListofPlants(
            [  {
                id: "",
                nickname: "",
                species:"",
                h2oFrequency:"",
                image:""
              }]
                ); 

    //     axios
    //     .post("https://reqres.in/api/users", listofPlants)
    //     .then(response => {
    //       // update temp state with value to display
    //       setPost(response.data);
  
    //       // clear state, could also use 'initialState' here
    //       setListofPlants(
    // [  {
    //     id: "",
    //     nickname: "",
    //     species:"",
    //     h2oFrequency:"",
    //     image:""
    //   }]
    //     ); 
  
    //       // clear any server error
    //       setServerError(null);
    //     })
    //     .catch(err => {
    //       // this is where we could create a server error in the form!
    //       setServerError("oops! something happened!");
    //     });
    }
    
  return (
    <div className="App">
      <h1> Edit your plants </h1>
      <UserForm/>
      <Link to="/addplant">Create your list of plants</Link>
      <br></br>
      <Link to="/listofplants">Your lovely plants</Link>
      <br></br>
      <Link to="/edit"></Link>
      <Switch>
            <Route path="/addplant" render ={() =><PlantForm addNewPlant ={addNewPlant} id ={Date.now()}/>}/>
            <Route path="/edit/:id" render ={() =><EditPlant listofplants={listofPlants} />}/>
            <Route path="/listofplants" render ={() =><ListOfPlants plants = {listofPlants} />}/>
            
      </Switch>

      <form onSubmit ={submitFlowersForm}> 
      {/* <button type="submit"> Submit complete list of plants </button> */}
       {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
      </form>

    </div>
  );
}

export default App;
