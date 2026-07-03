import React from "react";
import AdzunaJobFetch from "./adzuna";

function App() {
  return (
    <div>
      <AdzunaJobFetch 
        appId="d4d43603" 
        appKey="e036d2521e10370cedd23ae7db78b884" 
        what="full stack developer" 
        where="Hyderabad"
      />
    </div>
  );
}

export default App;
