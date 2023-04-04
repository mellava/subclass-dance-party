var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.bounce();
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.bounce = function() {
  var styleSettings = {
    border: '5px solid lightyellow',
    position: 'absolute',
  };
  this.$node.css(styleSettings);
  this.$node.addClass('bounce');
};