
// Add event listener to generate button
var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

//create the start window display as a promp
function generatePassword() {
  var AmoutOfCharacters = prompt("Choose password lenght between 8 and 128 characters");

  //if "ok" is selected then and alert will pop up saying "this needs a value will be displayed"
  if (!AmoutOfCharacters) {
    alert("this needs a value")
    // if an amount greater than 128 or less than 8 is enter then "text" will be displayed
    // if an amount between 8 to 128 is enter it will continue to ask the following questions
  } else if ((AmoutOfCharacters < 8) || (AmoutOfCharacters > 128)) {
    AmoutOfCharacters = prompt("You must choose between 8 and 128 characters");
    // list of the questions that follow after the first window as confirm windows
  } else {
    confirmSpecialSymbols = confirm("Include special characters?");
    confirmNumbers = confirm("Include numbers?");
    confirmUppercase = confirm("Include Uppercase letters?");
    confirmLowercase = confirm("Include Lowercase letters?");
    console.log(AmoutOfCharacters)
  };


  //Doesn't let all categories be input as "false" and one must "included" to generate password
  if (!confirmSpecialSymbols && !confirmNumbers && !confirmUppercase && !confirmLowercase) {
    category = alert("You must choose atleast one criteria!");
  }
  // this is the different combitations where 3 of the categories are selected as "included"
  else if (confirmSpecialSymbols && confirmNumbers && confirmUppercase) {
    // the ".concat()" allows the different categories to be added to together but one category must stay infront
    category = specialSymbols.concat(numbers, UPPERCASE)
  }
  else if (confirmSpecialSymbols && confirmNumbers && confirmLowercase) {
    category = specialSymbols.concat(numbers, lowercase)
  }
  else if (confirmSpecialSymbols && confirmUppercase && confirmLowercase) {
    category = specialSymbols.concat(UPPERCASE, lowercase)
  }
  else if (confirmNumbers && confirmUppercase && confirmLowercase) {
    category = numbers.concat(UPPERCASE, lowercase)
  }
  //COMBIATION OF 3 END //

  // this is the different combitations where 2 of the categories are selected as "included"
  else if (confirmSpecialSymbols && confirmNumbers) {
    category = specialSymbols.concat(numbers)
  }
  else if (confirmSpecialSymbols && confirmUppercase) {
    category = specialSymbols.concat(UPPERCASE)
  }
  else if (confirmSpecialSymbols && confirmLowercase) {
    category = specialSymbols.concat(lowercase)
  }
  else if (confirmNumbers && confirmUppercase) {
    category = numbers.concat(UPPERCASE)
  }
  else if (confirmNumbers && confirmLowercase) {
    category = numbers.concat(lowercase)
  }
  else if (confirmUppercase && confirmLowercase) {
    category = UPPERCASE.concat(lowercase)
  }
  //COMBIATION OF 2 END //

  // only one category selected as "included"
  else if (confirmSpecialSymbols) {
    category = specialSymbols;
  }
  else if (confirmNumbers) {
    category = numbers;
  }
  else if (confirmUppercase) {
    category = UPPERCASE;
  }
  else if (confirmLowercase) {
    category = lowercase;
  }
  //COMBIATION OF 1 END //

  // placeholder for the lenght 
  var password = [];

  // this is what causes the passwords randomized selection
  for (var i = 0; i < AmoutOfCharacters; i++) {
    var pickcategory = category[Math.floor(Math.random() * category.length)];
    password.push(pickcategory);
  }
  // converts the "password" into a string and returns it to the box
  var ps = password.join("");
  UserInput(ps);
  return ps;
}

// this function is what displays the written code into the box for the user
function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}

// VARIABLES used
var AmoutOfCharacters;
var confirmNumbers;
var confirmSpecialSymbols;
var confirmUppercase;
var confirmLowercase;
var category;

lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
UPPERCASE = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
specialSymbols = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

