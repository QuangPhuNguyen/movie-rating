import React, { useState } from 'react';

//components
import Header from "./components/Header";
import Movies from "./components/Movies";



//data
import data from "./assets/data/data.json";

//style sheet
import './assets/css/App.css';

function App() {
  const [ movieRating, setMovieRating ] = useState(data);
  console.log( movieRating );

  return (
    
    <div className="App">
      
        <Header />
        <div className="movies">
          <Movies movies={movieRating}/>
        </div>
    </div>
    
  );
}

export default App;
