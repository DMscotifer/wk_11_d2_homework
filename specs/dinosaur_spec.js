const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
const Park = require('../park.js');

describe('Dinosaur', function() {

  let park;
  let dinosaur;

  beforeEach(function() {
    park = new Park();
    dinosaur = new Dinosaur('carnivore', 10);
  });

  it('should have a type', function() {
    assert.strictEqual(dinosaur.type, 'carnivore');
  });

  it('should have a number of offspring per year', function() {
    assert.strictEqual(dinosaur.offspringPerYear, 10);
  });



});
