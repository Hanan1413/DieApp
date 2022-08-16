import React from 'react'
import './App.css';

import RollDice from "./RollDice.js";

class App extends React.Component { 
  
  
     render() { 
     return (
       <div>
         <h1 className="title">DIE GAME</h1>
         <div className="container">
           <RollDice  />
           
         </div>
       </div>
     );  
         }
        }
        ;
        
        
        export default App;