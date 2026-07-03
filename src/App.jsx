// import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// import React from "react";
// import GithubUserFetch from './githubFetch'

// export default function App() {
//   const [temperature, setTemperature] = useState(null);

//   useEffect(() => {
//     fetch("https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m")
//       .then((res) => res.json())
//       .then((data) => {
//         setTemperature(data.hourly.temperature_2m[1]);
//       });
//   }, []);

//   return (
//     <>
//       <h1>Current Temperature in Tokyo</h1>
//       {temperature !== null ? <p>{temperature} °C</p> : <p>Loading...</p>}
//     </>
//   );
// }
// import React from "react";
// import GithubUserFetch from "./githubFetch";

// function App() {
//   return (
//     <div>
//       <GithubUserFetch username="varshithathogaru" />
//     </div>
//   );
// }

// export default App;
   




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
