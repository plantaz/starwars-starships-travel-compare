export const calculateStops = (distance, starship) => {
  const stops = (distance / starship.travelTime) / starship.MGLT;
  return Math.trunc(stops);
};

const sortCondition = (starshipA, starshipB) => {
  return starshipA.stops > starshipB.stops ? 1 : -1;
};

export const sortByStops = (starships) => {
  return starships.sort(sortCondition);
};
