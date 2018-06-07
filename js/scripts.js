//Business logic
function oneToThree(placeholder) {
  var one = "I"
  var answer = one.repeat(placeholder);
  return answer;
};

function four(placeholder) {
  var four = "IV";
  var answer = four;
  return answer;
}

function five(placeholder) {
  var five = "V";
  var answer = five;
  return answer;
}

function nine(placeholder) {
  var nine = "IX";
  var answer = nine;
  return answer;
}




//User Interface logic
$(document).ready(function() {
  $(".theForm").submit(function(event) {
    event.preventDefault();
    var array = [];
    var inputString = $(".inputNumber").val()
    var input = parseInt($(".inputNumber").val());



    if (inputString.split("").length === 2) {
      var tensString = inputString.split("")[0];
      var tens = parseInt(tensString);
      if (input === 9){
        array.push(nine(input));
      }
      else if (input > 5 && input < 9) {
        array.push(five(input));
        input -= 5;
      }
      else if (input === 5) {
        array.push(five(input));
      }
      else if (input === 4){
        array.push(four(input));
      }
      else if (input > 0 && input < 4) {
        array.push(oneToThree(input));
      }



      // input -= somthing
      // inputString = input.tostring();
    }

    else if (inputString.split("").length === 1) {
      if (input === 9){
        array.push(nine(input));
      }
      else if (input > 5 && input < 9) {
        array.push(five(input));
        input -= 5;
      }
      else if (input === 5) {
        array.push(five(input));
      }
      else if (input === 4){
        array.push(four(input));
      }
      else if (input > 0 && input < 4) {
        array.push(oneToThree(input));
      }
    }


    $(".result").text(array.join(""));
  });
});
