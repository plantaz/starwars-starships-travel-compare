import React, { useState, useEffect } from 'react';

import getStarshipsList from './utils/data';
import { calculateStops, sortByStops } from './utils/calcs';

import Table from './components/Table';

import { 
  Container,
  Actions,
  Form,
  Input,
  Button
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
      <Actions>
        <Form>
          <Input
            type='text' 
            name='mglt' 
            placeholder='Distance to be covered'
            value={distance}
            onChange={e => setDistance(e.target.value)}
          />

          <Button
            type='button' 
            value='limpar' 
            onClick={handleClear}
          >
            clear
          </Button>
        </Form>

        <div>
          <Button 
            disabled={!prev} 
            onClick={handlePrev}
          >
            prev
          </Button>
          <Button 
            disabled={!next} 
            onClick={handleNext}
          >
            next
          </Button>
        </div>
      </Actions>
      <Table starships={starships} />
    </Container>
  );
}

export default App;
