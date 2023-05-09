import React, {useState} from "react";

export const NewRoomForm = (props)=>{
    // set initial state of 'name' to empty string
    const [name, setName] = useState('');
    // set initial state of 'area' to undefined
    const [area, setArea] = useState(undefined);
// function to handle area input changes
    const handleAreaInput = (e)=>{
        // convert input value to integer
        const int = parseInt(e.target.value, 10);
        // set 'area' state to integer if input is valid, otherwise set to empty string
        setArea(int >= 0 ? int : '');
    }
    // create a function to handle form submission
    const onSubmit = (e)=>{
        // prevent default form submission behavior
        // By default, when a form is submitted,
        // the browser will try to refresh the page or navigate to a new page
    
        e.preventDefault();
        // check if both 'name' and 'area' have valid values
        if (name && area){
            // call the 'addNewRoom' function passed down from parent with new room object
            props.addNewRoom({name, area});
            //clear the input field after the form is submitted by,
            // reset 'name' state to empty string
            setName('');
            // reset 'area' state to empty string
            setArea('');
        } else {
            // if either 'name' or 'area' is invalid, log an error message to console
            console.log('invalid input');
        }
    };
    return(
        <div>
            <h4>Add a New Room</h4>
            <form onSubmit={onSubmit}>
                <input
                type="text"
                placeholder="name"
                // update 'name' state on input change
                onChange={(e)=> setName(e.target.value)}
                // set input value to 'name' state
                value={name}
                />
                <input
                type="text"
                placeholder="area"
                // update 'area' state on input change
                onChange={handleAreaInput}
                // set input value to 'area' state
                value={area}
                />
                <button type="submit">Add Room</button>
            </form>
        </div>
    )
};