let catQueue = new Queue();
let dogQueue = new Queue();

//Not species specific
function enqueue(animal) {
  let today = new Date();
  let date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  let animal = {
    ...animal,
    date: date,
  };

  if (animal.species === cat) {
    catQueue.add(animal);
  } else {
    dogQueue.add(animal);
  }
}

//for calling on a specific queue
function enqueue(animal) {
  let today = new Date();
  let date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  let animal = {
    ...animal,
    Date: date,
  };

  this.add(animal);
}

function dequeueAny(catQueue, dogQueue) {
  if (catQueue.peek().date < dogQueue.peek().date) {
    return catQueue.dequeueCat();
  } else {
    return dogQueue.dequeueDog();
  }
}

function dequeueDog() {
  return this.remove();
}

function dequeueCat() {
  return this.remove();
}
