import {Provider } from "react-redux";
import Store from "./components/Store";
import Counter from "./components/Counter";
import './App.css'

export default function App(){
 return(
  <div className="App">
  <Provider store={Store}>
  <Counter />
  </Provider>
  </div>
 
);
}
