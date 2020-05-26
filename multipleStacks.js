function SetOfStacks(limit) {
  This.limit = limit;
  this.stackArr = [];

  this.push = function (obj) {
    if (this.stackArr[stackArr.length - 1].length <= this.limit) {
      this.stackArr[stackArr.length - 1].push(obj);
    } else {
      let newStack = [obj];
      this.stackArr.push(newStack);
    }

    return this.stackArr[stackArr.length - 1];
  };

  this.pop = function () {
    return this.stackArr[stackArr.length - 1].pop;
  };

  this.popAt = function (ind) {
    if (stackArr[ind].length != 0) {
      return stackArr[ind].pop();
    } else {
      return 'No such index';
    }
  };
}
