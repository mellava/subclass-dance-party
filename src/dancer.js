var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.step();
  this.setPosition(top, left);
  // this.changeColorOnHover();
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  //setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function() {
  this.setPosition(top, 30);
};

// makeDancer.prototype.changeColorOnHover = function() {
//   this.$node.hover(function() {
//     var styleSettings1 = {
//       border: '5px solid purple'
//     };
//     this.$node.css(styleSettings1);
//   }, function() {
//     var styleSettings2 = {
//       border: '5px solid pink'
//     };
//     this.$node.css(styleSettings2);
//   });
// };

