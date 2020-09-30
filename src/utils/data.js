import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://swapi.dev/api/starships',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

const getStarshipsData = async () => {
  const { data } = await axios.get();
  return data.results;
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

const getStarshipsList = async () => {
  const starshipsData = await getStarshipsData();
  const starships = [];

  for (let starshipData of starshipsData) {
    const starship = await filteredStarshipsData(starshipData);

    const basetime = starship.consumables.split(' ');
    const time = parseInt(basetime[0]) * getBaseTime(basetime[1]);

    starships.push({...starship, travelTime: time});
  }

  return starships;
};

export default getStarshipsList;
