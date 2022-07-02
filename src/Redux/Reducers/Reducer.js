
// Initialise the state to an empty array
const initialState = {favourite: []};

const Reducer = (state = initialState, action) =>{
    
    let newState ;
    
    switch (action.type){
        
        case "ADD":
            return { favourite: [...state.favourite, action.payload] };
        
        case "REMOVE":
          
            newState = state.favourite.filter((fav) => fav.imdbID !== action.payload.imdbID);
            return {favourite: newState};
       
        default:
            return state;
    }
}

export default Reducer;


