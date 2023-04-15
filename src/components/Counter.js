import {useSelector, useDispatch} from "react-redux";
import {Increment, Decrement, Reset }  from "./Actions";

const Counter = () => {
const Counter  = useSelector((state) => state.number);
const dispatch = useDispatch();
return(
 <div>
 <br/>
  <h1>{Counter}</h1>
  <button 
    className="btn"
    onClick= { () => dispatch(Increment())}
  >Increment
  </button>
  <button 
   className="btn"
    onClick= { () => dispatch(Reset())}
  >Reset
  </button>

<button
  className="btn"
  onClick = {() => dispatch(Decrement())}
>Decrement
</button>
</div>
);
};
export default Counter;
