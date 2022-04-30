import { render } from "@testing-library/react";
import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import Characters from "./Characters";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NewCharacter from "./NewCharacter";
import CharacterSheetParent from "./CharacterSheet/CharacterSheetParent";

function App() {
  
  return (
    <div className="App">
      <nav>
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/character">Characters</Link>
      <Link to="/newcharacter">New Character</Link>
      
      </nav>
        <Routes>
          <Route path="/signin" element={<><SignIn /></>}/>
          <Route path="/signup" element={<><SignUp /></>}/>
          <Route path="/character" element={<><Characters /></>}/>
          <Route path="/newcharacter" element={<><NewCharacter /></>}/>
          <Route path="/charactersheet" element={<><CharacterSheetParent /></>}/>
        </Routes>

    </div>
  );

}

export default App;
