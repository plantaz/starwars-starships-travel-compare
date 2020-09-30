import React, { useState, useEffect } from 'react';

import getStarshipsList from './utils/data';
import { calculateStops, sortByStops } from './utils/calcs';

import Table from './components/Table';

import { 
  Container,
  FormContainer,
  Input,
  InputButton,
} from './style';

const App = () => {
  const [starships, setStarships] = useState([]);
  const [url, setUrl] = useState('');
  const [next, setNext] = useState('');
  const [prev, setPrev] = useState('');
  const [distance, setDistance] = useState('');

  const getData = async (url) => {
    const data = await getStarshipsList(url);

    const ss = [];
    for (const starship of data.starships) {
      const stops = calculateStops(distance, starship);
      ss.push({...starship, stops});
    }

    setNext(data.next);
    setPrev(data.prev);
    setStarships(sortByStops(ss));
  };

  const handleNext = () => {
    setUrl(next);
  };

  const handlePrev = () => {
    setUrl(prev);
  };

  useEffect(() => {
    getData(url); 
  }, [distance, url]);


  const handleClear = () => { 
    setDistance('');
  };

  return (
    <Container>
      <FormContainer>
        <Input
          type='text' 
          name='mglt' 
          placeholder='Distância a ser percorrida'
          value={distance}
          onChange={e => setDistance(e.target.value)}
        />

        <InputButton
          type='button' 
          value='limpar' 
          onClick={handleClear}
        />
      </FormContainer>
      <Table starships={starships} />
      <div>
        <button 
          disabled={!prev} 
          onClick={handlePrev}
        >
          prev
        </button>
        <button 
          disabled={!next} 
          onClick={handleNext}
        >
          next
        </button>
      </div>
    </Container>
  );
}

export default App;
