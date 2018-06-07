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





function tenToThirty(placeholder) {
  var one = "X"
  var answer = one.repeat(placeholder);
  return answer;
};

function forty(placeholder) {
  var four = "XL";
  var answer = four;
  return answer;
}

function fifty(placeholder) {
  var five = "L";
  var answer = five;
  return answer;
}

function ninety(placeholder) {
  var nine = "XC";
  var answer = nine;
  return answer;
}




function hundred(placeholder) {
  var one = "C"
  var answer = one.repeat(placeholder);
  return answer;
};

function fourHundred(placeholder) {
  var four = "CD";
  var answer = four;
  return answer;
}

function fiveHundred(placeholder) {
  var five = "D";
  var answer = five;
  return answer;
}

function nineHundred(placeholder) {
  var nine = "CM";
  var answer = nine;
  return answer;
}

function thousand(placeholder) {
  var one = "M"
  var answer = one.repeat(placeholder);
  return answer;
}


//User Interface logic
$(document).ready(function() {
  $(".theForm").submit(function(event) {
    event.preventDefault();
    var array = [];
    var inputString = $(".inputNumber").val()
    var input = parseInt($(".inputNumber").val());


    if (isNaN(input)) {
      array.push("That is not a number")
    }

    if (input > 3999) {
      array.push("That is not a valid number")
    };


    if (inputString.split("").length === 4) {
      var thousandsString = inputString.split("")[0];
      var thousands = parseInt(thousandsString);
      if (thousands > 0 && thousands < 4) {
        array.push(thousand(thousands));
      };
      inputString = inputString.split("").splice(1).join("");
      input = parseInt(inputString);
    };



    if (inputString.split("").length === 3) {
      var hundredsString = inputString.split("")[0];
      var hundreds = parseInt(hundredsString);
      if (hundreds === 9){
        array.push(nineHundred(input));
      }
      else if (hundreds > 5 && hundreds < 9) {
        array.push(fiveHundred(hundreds));
        hundreds -= 5;
      }
      else if (hundreds === 5) {
        array.push(fiveHundred(hundreds));
      }
      else if (hundreds === 4){
        array.push(fourHundred(hundreds));
      }
      if (hundreds > 0 && hundreds < 4) {
        array.push(hundred(hundreds));
      }

      inputString = inputString.split("").splice(1).join("");
      input = parseInt(inputString);

    }

    if (inputString.split("").length === 2) {
      var tensString = inputString.split("")[0];
      var tens = parseInt(tensString);
      if (tens === 9){
        array.push(ninety(input));
      }
      else if (tens > 5 && tens < 9) {
        array.push(fifty(tens));
        tens -= 5;
      }
      else if (tens === 5) {
        array.push(fifty(tens));
      }
      else if (tens === 4){
        array.push(forty(tens));
      }
      if (tens > 0 && tens < 4) {
        array.push(tenToThirty(tens));

      }

      inputString = inputString.split("").splice(1).join("");
      input = parseInt(inputString);

    }

    if (inputString.split("").length === 1) {
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
      if (input > 0 && input < 4) {
        array.push(oneToThree(input));
      }
    }


    $(".result").text(array.join(""));
  });
});
