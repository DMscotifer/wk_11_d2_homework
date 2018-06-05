const Park = function() {
  this.enclosures = [];
  this.noOfDinosaurs = this.enclosures.length;
};

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
}

module.exports = Park;
