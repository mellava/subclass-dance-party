describe('breakDancer', function() {

  var breakDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    breakDancer = new makeBreakDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(breakDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a spin function that makes the node spin', function() {
    sinon.spy(breakDancer, 'spin');
    breakDancer.spin();
    expect(breakDancer.spin.called).to.be.true;
  });
});
