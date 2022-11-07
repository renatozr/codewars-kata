const number = (busStops) => busStops.reduce((acc, cur) => acc + cur[0] - cur[1], 0);
