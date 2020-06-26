function shuffleArray(array, num){
  let length = array.length;
  let middle = length/2;
  let retArray = [];

  for(let i = 0; i < length / 2; i++){
    retArray.push(array[i], array[middle + i]);
  }

  return retArray;
}

module.exports = shuffleArray;