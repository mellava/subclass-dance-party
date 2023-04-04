$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    neighborFunc();

    $('.dancer').hover(
      function() {
        var styleSettings1 = {
          border: '5px solid purple'
        };
        $(this).css(styleSettings1);
      }, function() {
        var styleSettings2 = {
          border: '5px solid pink'
        };
        $(this).css(styleSettings2);
      });
  });

  $('.lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i];
      dancer.lineUp();
    }
  });




  var neighborFunc = function() {
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer1 = window.dancers[i];
      for (var j = i + 1; j < window.dancers.length; j++) {
        var dancer2 = window.dancers[j];
        var x = dancer1.left - dancer2.left;
        var y = dancer1.top - dancer2.top;
        var distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

        if (distance < 200) {
          dancer1.$node.css('border-color', 'black');
          dancer2.$node.css('border-color', 'black');
        }
      }
    }
  };
});






