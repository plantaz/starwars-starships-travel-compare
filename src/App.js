import React, { useState, useEffect } from 'react';
import getStarshipsList from './utils/data';

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

  const sortCondition = (starshipA, starshipB) => {
    return starshipA.stops > starshipB.stops ? 1 : -1;
  };

  const getData = async () => {
    const data = await getStarshipsList();

    const ss = [];
    for (const starship of data) {
      const stops = (distance / starship.travelTime) / starship.MGLT;
      ss.push({...starship, stops: Math.trunc(stops)});
    }

    setStarships(ss.sort(sortCondition));
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
