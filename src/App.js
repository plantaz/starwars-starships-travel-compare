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
  const [distance, setDistance] = useState('');

  const getData = async () => {
    const data = await getStarshipsList();

    const ss = [];
    for (const starship of data) {
      const stops = calculateStops(distance, starship);
      ss.push({...starship, stops});
    }

    setStarships(sortByStops(ss));
  };

  useEffect(() => {
    getData(); 
  }, [distance]);

  console.log('starships:', starships);

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
    </Container>
  );
}

export default App;
