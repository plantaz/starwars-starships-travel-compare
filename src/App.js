import React, { useState, useEffect } from 'react';
import getStarshipsList from './utils/data';

const App = () => {
  const [starships, setStarships] = useState([]);
  const [distance, setDistance] = useState('');

  const getData = async () => {
    const data = await getStarshipsList();

    const ss = [];
    for (const starship of data) {
      const stops = (distance / starship.travelTime) / starship.MGLT;
      ss.push({...starship, stops: Math.trunc(stops)});
    }

    setStarships(ss);
  };

  useEffect(() => {
    getData(); 
  }, [distance]);

  console.log('starships:', starships);

  const handleClear = () => { 
    setDistance('');
  };

  return (
    <>
      <form>
        <input 
          type='text' 
          name='mglt' 
          value={distance}
          onChange={e => setDistance(e.target.value)}
        />

        <input 
          type='button' 
          value='clear' 
          onClick={handleClear}
        />
      </form>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>consumables</th>
            <th>MGLT</th>
            <th>Stops</th>
          </tr>
        </thead>
        <tbody>
          {
            starships.map((starship) => {
              return (
                <tr>
                  <td>{starship.name}</td>
                  <td>{starship.consumables}</td>
                  <td>{starship.MGLT}</td>
                  <td>{starship.stops}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
