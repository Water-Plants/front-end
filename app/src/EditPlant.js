import axios from 'axios';
import React, {useState, useEffect} from 'react';
import * as yup from 'yup';



function EditPlant(props) {

    // // temporary state used to set state
    const [post, setPost] = useState([]);

    // // server error
    const [serverError, setServerError] = useState("");

     // control whether or not the form can be submitted if there are errors in form validation
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);


    const [plant, setPlant] =useState({
        id: props.id, // customize pre-populate value
        nickname:"",
        species:"",
        h2oFrequency:"",
        image:""
    });

    // User input validation
    const [errors, setErrors] =useState({
        id: props.id, // customize pre-populate value
        nickname:"",
        species:"",
        h2oFrequency:"",
        image:""
    });

// Schema used for all validation to determine whether the input is valid or not
const FILE_SIZE = 1600 * 1024;
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png"
];
  const formSchema = yup.object().shape({
    id: yup.number("Enter ID Number").required().positive().integer(),
    nickname: yup.string().required("Enter nickname"),
    species: yup.string().required( "Enter species"),
    h2oFrequency: yup.date().required("Enter valid date"),
    image: yup
    .mixed()
    .required("A file is required")
    .test(
      "fileSize","File too large",
      value => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      value => value && SUPPORTED_FORMATS.includes(value.type)
    )
  });

  // USeeffect to trigger yup check
  useEffect(() => {
    formSchema.isValid(plant).then(valid => {
      console.log("valid?", valid);
      setIsButtonDisabled(!valid);
    });
  }, [plant]);

    // Trigger error messages
      
  const validateChange = e => {
    yup
      .reach(formSchema, e.target.name) // get the value out of schema at key "e.target.name" --> "name="
      .validate(e.target.value) // value in input
      .then(valid => {
        // if passing validation, clear any error
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch(err => {
        // if failing validation, set error in state
        console.log("error!", err);
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };

  

    // Update object data of new plant
    const handleChanges =(e) =>{
        e.persist(); 
        const newStateObj = {...plant, [e.target.name]:  e.target.name === "image" ? e.target.files[0]: e.target.value}
            // [e.target.name]: e.target.value} 
        validateChange(e);
        setPlant(newStateObj)

    };


    const submitForm = event =>{
        // console.log('new plant event', plant)
        event.preventDefault();
        props.addNewPlant(plant);

        setPlant({ id:Date.now(), 
            nickname: "" ,
            species:"",
            h2oFrequency:"",
            image:"",
         }); // Clean form once is sumitted 



      //   axios
      //   .post("https://reqres.in/api/users", plant)
      //   .then(response => {
      //     // update temp state with value to display
      //     setPost(response.data);
  
      //     // clear state, could also use 'initialState' here
      //   setPlant({ id:Date.now(), 
      //     nickname: "" ,
      //     species:"",
      //     h2oFrequency:"",
      //     image:"",
      //  }); // Clean form once is sumitted 
  
      //     // clear any server error
      //     setServerError(null);
      //   })
      //   .catch(err => {
      //     // this is where we could create a server error in the form!
      //     setServerError("oops! something happened!");
      //   });


    }
    const[plantedit, setPlantEdit] = useState({})

    const getplantDetails = (idToSearch) =>{
      const plantObj = props.listofplants.filter(item => {
        return item.id === idToSearch
      });
      setPlantEdit(plantObj);
      console.log('plantObj',plantedit)
    }

    return (
        <div>
            <h1>Edit your plant </h1>

            <form onSubmit ={submitForm}> 

                <label htmlFor = "id">Id </label>
                <input    id = "id" // label associated with 
                            name = "id" 
                            type="number" 
                            placeholder = "Enter Id number" 
                            value = {plant.id}// enter pre-populate value
                            // onChange ={handleChanges} 
                            />

                {/* {errors.id.length > 0 ? <p className="error">{errors.id}</p> : null} */}

                <br></br>
                <br></br>

                <label htmlFor = "nickname">Nickename </label>
                <input id = "nickname" 
                        name = "nickname"
                        type="text" 
                        placeholder = "Enter nickename"
                        value = {plant.nickname} // enter pre-populate value
                        // onChange ={handleChanges}
                         />
                {/* {errors.nickname.length > 0 ? <p className="error">{errors.nickname}</p> : null} */}

                <br></br>
                <br></br>

                <label htmlFor = "species"> Species </label>
                <input id = "species" 
                        name = "species"
                        type="text" 
                        placeholder = "Enter species"
                        value = {plant.species}
                        // onChange ={handleChanges}
                        />
                {/* {errors.species.length > 0 ? <p className="error">{errors.species}</p> : null} */}

                <br></br>
                <br></br>

                <label htmlFor = "h2oFrequency">Enter Frequency </label>
                <input id = "h2oFrequency" 
                        name = "h2oFrequency" 
                        type="datetime-local" 
                        placeholder = "Enter h2oFrequency"
                        value = {plant.h2oFrequency} 
                        // onChange ={handleChanges}
                        />
                {/* {errors.h2oFrequency.length > 0 ? <p className="error">{errors.h2oFrequency}</p> : null} */}


                <br></br>
                <br></br>

                <label htmlFor = "image"> Upload your plant image </label>
                <input id= "image"
                        type="file" 
                        name="image" 
                        multiple accept="image/*"
                        // onChange={handleChanges}
                        /> 
             
                <br></br>
                <br></br> 

                <pre>{JSON.stringify(post, null, 2)}</pre>

            
                <button disabled={isButtonDisabled} type="submit"> Add new plant </button>

            </form>
      </div>
    );
  }
  
  export default EditPlant;