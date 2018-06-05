const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
const Park = require('../park.js');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function() {
    park = new Park();
    dinosaur = new Dinosaur();
  });

  it('enclosure should start empty', function() {
    assert.strictEqual(park.noOfDinosaurs, 0);
  });

  it('should be able to add dinosaur', function() {
    park.addDinosaur(dinosaur);
    assert.strictEqual(park.enclosures.length, 1);
  });

  it('should be able to remove all dinosaurs of a particular type', function() {
    park.removeAllType('carnivore');
    assert.strictEqual(park.noOfDinosaurs, 0);
  });

  it('should get all the dinosaurs with an offspring count of more than 2', function(){
    assert.strictEqual(park.getDinosaursByOffspring(2).size(), 1);
  });

});
