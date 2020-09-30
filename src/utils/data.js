import axios from 'axios';

const getStarshipsData = async (url) => {
  const uri = url ? url : 'https://swapi.dev/api/starships';
  const { data } = await axios.get(uri);
  return data;
};

const filteredStarshipsData = async (data) => {
  const { name, consumables, MGLT, url } = data;
  return {
    name,
    consumables,
    MGLT,
    url
  }
};

const getBaseTime = (base) => {
  if (/^day(s)?$/.test(base)) return 24;
  if (/^week(s)?$/.test(base)) return 168;
  if (/^month(s)?$/.test(base)) return 720;
  if (/^year(s)?$/.test(base)) return 8760;
};

const getStarshipsList = async (url) => {
  const starshipsData = await getStarshipsData(url);
  const starships = [];

  for (let starshipData of starshipsData.results) {
    const starship = await filteredStarshipsData(starshipData);

    const basetime = starship.consumables.split(' ');
    const time = parseInt(basetime[0]) * getBaseTime(basetime[1]);

    starships.push({...starship, travelTime: time});
  }

  return { 
    starships, 
    next: starshipsData.next,
    prev: starshipsData.previous
  };
}

export default getStarshipsList;
