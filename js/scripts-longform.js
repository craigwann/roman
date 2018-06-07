//Business logic
//----------------------------ONES
function oneToThree(placeholder) {
  var one = "I"
  var answer = one.repeat(placeholder);
  return answer;
};

function four() {
  var four = "IV";
  var answer = four;
  return answer;
}

function five() {
  var five = "V";
  var answer = five;
  return answer;
}

function nine() {
  var nine = "IX";
  var answer = nine;
  return answer;
}

//----------------------------TENS
function tenToThirty(placeholder) {
  var one = "X"
  var answer = one.repeat(placeholder);
  return answer;
};

function forty() {
  var four = "XL";
  var answer = four;
  return answer;
}

function fifty() {
  var five = "L";
  var answer = five;
  return answer;
}

function ninety() {
  var nine = "XC";
  var answer = nine;
  return answer;
}



//----------------------------HUNDREDS
function hundred(placeholder) {
  var one = "C"
  var answer = one.repeat(placeholder);
  return answer;
};

function fourHundred() {
  var four = "CD";
  var answer = four;
  return answer;
}

function fiveHundred() {
  var five = "D";
  var answer = five;
  return answer;
}

function nineHundred() {
  var nine = "CM";
  var answer = nine;
  return answer;
}

//----------------------------THOUSANDS
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
    };

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
        array.push(nineHundred());
      } else if (hundreds > 4 && hundreds < 9) {
        array.push(fiveHundred());
        hundreds -= 5;
      } else if (hundreds === 4){
        array.push(fourHundred());
      } if (hundreds > 0 && hundreds < 4) {
        array.push(hundred(hundreds));
      }

      inputString = inputString.split("").splice(1).join("");
      input = parseInt(inputString);

    }

    if (inputString.split("").length === 2) {
      var tensString = inputString.split("")[0];
      var tens = parseInt(tensString);
      if (tens === 9){
        array.push(ninety());
      } else if (tens > 4 && tens < 9) {
        array.push(fifty());
        tens -= 5;
      } else if (tens === 4){
        array.push(forty());
      } if (tens > 0 && tens < 4) {
        array.push(tenToThirty(tens));

      }

      inputString = inputString.split("").splice(1).join("");
      input = parseInt(inputString);

    }

    if (inputString.split("").length === 1) {
      if (input === 9){
        array.push(nine());
      } else if (input > 4 && input < 9) {
        array.push(five());
        input -= 5;
      } else if (input === 4){
        array.push(four());
      } if (input > 0 && input < 4) {
        array.push(oneToThree(input));
      }
    }


    $(".result").text(array.join(""));
  });
});
