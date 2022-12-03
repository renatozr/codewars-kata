function queueTime(customers, n) {
  if (customers.length === 0) return 0;
  if (customers.length <= n) return Math.max(...customers);
  
  const timePerTills = [];
  
  for (let i = 0; i < n; i += 1) {
    timePerTills.push(customers[i]);
  }
  
  for (let i = n; i < customers.length; i += 1) {
    const smallestTime = Math.min(...timePerTills);
    const smallestTimeIndex = timePerTills.findIndex((time) => time === smallestTime);
    
    timePerTills[smallestTimeIndex] += customers[i];
  }
  
  const queueTime = Math.max(...timePerTills);
  
  return queueTime;
}
