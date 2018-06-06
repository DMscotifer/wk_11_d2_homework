const Park = function() {
  this.enclosures = [];
};

Park.prototype.noOfDinosaurs = function() {
  return this.enclosures.length;
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.enclosures.push(dinosaur);
};

Park.prototype.removeAllType = function(type) {
  let i = 0;
  for (dinosaur in this.enclosures) {
    if(dinosaur.type === type){
      enclosure.remove[i];
    }
    i++
  }
};

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
