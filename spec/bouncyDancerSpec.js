describe('bouncyDancer', function() {

  var bouncyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = new makeBouncyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a bounce function that makes the node bounce', function() {
    sinon.spy(bouncyDancer, 'bounce');
    bouncyDancer.bounce();
    expect(bouncyDancer.bounce.called).to.be.true;
  });
});
