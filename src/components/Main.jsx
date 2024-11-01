import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './Home';
import StarshipList from './StarshipList';

function Main() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const getStarships = async () => {
      try{
        const response = await axios.get(`https://swapi.dev/api/starships/`);
        console.log(response);
        setStarships(response.data.results);
      }catch (error) {
        console.error("Failed to fetch starships:", error);
      }
    };  
    getStarships()
  }, [])

  return (
  <>
    <main>    
       <Home />
       <StarshipList starships={starships} />
    </main>
  </>
  );
}

export default Main;