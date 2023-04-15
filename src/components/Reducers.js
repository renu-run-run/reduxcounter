const initialState = {
    number: 0 
   }
   function reducer(state = initialState, action){
    switch (action.type){
    
    case "Increment":
    return{
     ...state,
     number: state.number + 1
     };
   
    case "Decrement":
    return{
     ...state,
    number: state.number - 1
    };

    case "Reset":
    return{
     ...state,
    number: 0
    };
   
   default:
    return state;
   }
   }
   
   export default reducer;