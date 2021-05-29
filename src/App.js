import React,{useEffect} from "react";
import {useDispatch} from "react-redux";
import {loadGames} from "./actions/gameAction";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadGames())
  })

  return (
    <div className="App">
      IGNITE
    </div>
  );
}

export default App;
