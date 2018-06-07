//Business logic
function romanize(first, second, placeholder) {
  var theArray = [["I", "X", "C", "M"], ["IV", "XL", "CD"], ["V", "L", "D"], ["IX", "XC", "CM"]];
  var one = theArray[first][second]
  var answer = one.repeat(placeholder);
  return answer;
};
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
    else if (input > 3999 && input < 0) {
      array.push("That is not a valid number")
    }
    else if (inputString.split("").length === 4) {
      var thousandsString = inputString.split("")[0];
      var thousands = parseInt(thousandsString);
      if (thousands > 0 && thousands < 4) {
        array.push(romanize(0, 3, thousands));
      };
      inputString = inputString.split("").splice(1).join("");
      input = parseInt(inputString);
    }
    if (inputString.split("").length === 3) {
      var hundredsString = inputString.split("")[0];
      var hundreds = parseInt(hundredsString);
      if (hundreds === 9){
        array.push(romanize(3, 2, 1));
      } else if (hundreds > 4 && hundreds < 9) {
        array.push(romanize(2, 2, 1));
        hundreds -= 5;
      } else if (hundreds === 4){
        array.push(romanize(1, 2, 1));
      } if (hundreds > 0 && hundreds < 4) {
        array.push(romanize(0, 2, hundreds));
      }
      inputString = inputString.split("").splice(1).join("");
      input = parseInt(inputString);
    }
    if (inputString.split("").length === 2) {
      var tensString = inputString.split("")[0];
      var tens = parseInt(tensString);
      if (tens === 9){
        array.push(romanize(3, 1, 1));
      } else if (tens > 4 && tens < 9) {
        array.push(romanize(2, 1, 1));
        tens -= 5;
      } else if (tens === 4){
        array.push(romanize(1, 1, 1));
      } if (tens > 0 && tens < 4) {
        array.push(romanize(0, 1, tens));
      }
      inputString = inputString.split("").splice(1).join("");
      input = parseInt(inputString);
    }
    if (inputString.split("").length === 1) {
      if (input === 9){
        array.push(romanize(3, 0, 1));
      } else if (input > 4 && input < 9) {
        array.push(romanize(2, 0, 1));
        input -= 5;
      } else if (input === 4){
        array.push(romanize(1, 0, 1));
      } if (input > 0 && input < 4) {
        array.push(romanize(0, 0, input));
      }
    }
    $(".result").text(array.join(""));
  });
});
