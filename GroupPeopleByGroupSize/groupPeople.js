const groupPeople = function(groupSizes){
  const length = groupSizes.length;
  let retArr = [];
  let buckets = {};
  
  for(let i = 0; i < length; i += 1){
    if(buckets[groupSizes[i]]){
      buckets[groupSizes[i]].push(i)
    } else {
      buckets[groupSizes[i]] = [i];
    }
  }
  
  for(key of Object.keys(buckets)){
    if(buckets[key].length === key){
      retArr.push(buckets[key]);
    } else {
      for(let i = 0; buckets[key].length > 0;){
        retArr.push(buckets[key].splice(i, key))
      }
    }
  }
  
  return retArr;
}

module.exports = groupPeople;