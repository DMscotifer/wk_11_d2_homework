const Park = function() {
  this.enclosures = [];
  this.noOfDinosaurs = this.enclosures.length;
};

Park.prototype.addDinosaur = function(dinosaur) {
  this.enclosures.push(dinosaur);
};

module.exports = Park;
