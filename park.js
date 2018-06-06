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

Park.prototype.getDinosaursByOffspring = function(num) {
  let i = 0;
  let result = [];
  for (dinosaur in this.enclosures) {
    if(dinosaur.offspringPerYear === num){
      result.add(dinosaur);
    }
    i++
  }
};

module.exports = Park;
