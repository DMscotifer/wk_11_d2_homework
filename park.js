const Park = function() {
  this.enclosures = [];
};

Park.prototype.noOfDinosaurs = function() {
  return this.enclosures.length;
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.enclosures.push(dinosaur);
};

Park.prototype.removeType = function(type) {
  for(var i = (this.enclosures.length - 1); i >= 0; i--) {
    if(this.enclosures[i].type === type) {
       this.enclosures.splice(i, 1);
    }
  }
}

Park.prototype.offspringGreaterThan = function(num) {
  var total = 0;
  for (dino of this.enclosures){
    if (dino.offspringPerYear > num) {
      total += 1;
    }
  }
  return total;
}

module.exports = Park;
