// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var passwordText = document.querySelector("#password");

  // While loop control value

  var masterBool = false;


    // Prompt variables

  var numberOfCharacters = prompt('How many characters?');
  if (numberOfCharacters < 8 | numberOfCharacters > 128) {
    alert('Not within parameters. Password must be at least 8 characters, max 128 characters');
    return
  };
  
  var choiceOfLower = prompt('Include lowercase letters?\ny/n');
  choiceOfLower = choiceOfLower.toLocaleLowerCase();
  
  var choiceOfUpper = prompt('Include uppercase letters?\ny/n');
  choiceOfUpper = choiceOfUpper.toLocaleLowerCase();

  var choiceOfSpecial = prompt('Include special characters?\ny/n');
  choiceOfSpecial = choiceOfSpecial.toLocaleLowerCase();

  var choiceOfNumber = prompt('Include numbers?\ny/n');
  choiceOfNumber = choiceOfNumber.toLocaleLowerCase();

  var newPassword = "";


  function generatePassword() {
    while (!masterBool) {
      newPassword = ""

      // Character Arrays

      var lowerCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
      var upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split('');
      var numberArray = '1234567890'.split('');
      var masterCharacterArray = [];

      // Character check bools

      var lowerBool = false;
      var upperBool = false;
      var specialBool = false;
      var numberBool = false;

      if (choiceOfLower === "n") {
        lowerBool = true;
      } 
      if (choiceOfUpper === "n" ) {
        upperBool = true;
      } 
      if (choiceOfSpecial === "n") {
        specialBool = true;
      }
      if (choiceOfNumber === "n") {
        numberBool = true;
      }


      function createMasterArray() {

        function addCharLoop(array) {
          for (var i = 0; i < array.length; i++) {
            masterCharacterArray.push(array[i])
          }
        }

        if (choiceOfLower === 'y') {
          addCharLoop(lowerCharacters);
        } 
        if (choiceOfUpper === 'y') {
        addCharLoop(upperCharacters);
        } 
        if (choiceOfSpecial === 'y') {
          addCharLoop(specialCharacters)
        } 
        if (choiceOfNumber === 'y') {
          addCharLoop(numberArray);
        }
      }

      function addCharToPassword() {
        for (var i = 0; i < numberOfCharacters; i++) {
          var randIndex = Math.floor(Math.random() * masterCharacterArray.length);
          newPassword += masterCharacterArray[randIndex];
        }
      }
      
      function checkPassword(array) {
        let switchValue = ""
        for (var i = 0; i < array.length; i++) {
          if (newPassword.includes(array[i])) {
            switchValue = true;
            break; 
          } 
        }
        if (switchValue === true) {
          return true;
        } else {
          return false;
        }
      }


      createMasterArray();
      addCharToPassword();

      // Check if parameters are in password

      if (choiceOfLower === 'y') {
        lowerBool = checkPassword(lowerCharacters);
      } 
      if (choiceOfUpper === 'y') {
        upperBool = checkPassword(upperCharacters);
      } 
      if (choiceOfSpecial === 'y') {
        specialBool = checkPassword(specialCharacters);
      } 
      if (choiceOfNumber === 'y') {
        numberBool = checkPassword(numberArray);
      }
    
      console.log("lower bool: " + lowerBool);
      console.log("upper bool: " + upperBool);
      console.log("special bool: " + specialBool);
      console.log("number bool: " + numberBool);

      // If parameters are not met, while loop repeats and creates new password

      if (lowerBool && upperBool && specialBool && numberBool) {
        masterBool = true;
        console.log('master bool is true');
      }
    }
    return newPassword;
  };


  var password = generatePassword();
  console.log('from outside of generate password function. master bool is: ' + masterBool);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {

}

