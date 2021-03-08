const number = (busStops) => busStops.reduce((remaining, [on, off]) => remaining + on - off, 0);

//or

let number = function(busStops){
  let totalPeople = 0;
  for (let i=0; i<busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}