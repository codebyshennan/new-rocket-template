var letters = ["a", "b", "c", "d", "e", "f"];

var generateYesPerLetter = function () {
  var myOutputValue = "";
  var counter = 0;

  while (counter < letters.length) {
    myOutputValue = myOutputValue + "yes";
    counter = counter + 1;
  }
  return myOutputValue;
};

console.log(generateYesPerLetter());

// QUESTION 5: This is a sample code snippet of a phone book. Explain what this code does.
var names = [];
var findName = function (input) {
  var found = false;
  var index = 0;
  while (index < names.length) {
    var currentName = names[index];
    if (currentName == input) {
      found = true;
    }
    index = index + 1;
  }

  console.log(found);
  if (!found) {
    names.push(input);
  }

  var myOutputValue = "All names: " + names;
  return myOutputValue;
};
