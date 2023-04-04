var makeBreakDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.spin();
};

makeBreakDancer.prototype = Object.create(makeDancer.prototype);
makeBreakDancer.prototype.constructor = makeBreakDancer;

makeBreakDancer.prototype.spin = function() {
  var styleSettings = {
    border: '5px solid green',
    position: 'absolute',

  };
  this.$node.css(styleSettings);
  this.$node.addClass('spin');
};

