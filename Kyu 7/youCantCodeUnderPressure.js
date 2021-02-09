function Counter() {
  var counter = 0;  
  this.check = function(){return counter;};
  this.increment = function(){counter++;};
};