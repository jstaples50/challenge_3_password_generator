// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Variables needed
//    -Array with letters DONE
//    -Array with numbers DONE
//    -Array with special characters DONE
//    -Empty variable that will hold the new password string DONE

// 2 prompts needed DONE
//    -for length (min 8 max 128);
//        -alert if choice is outside of parameters
//    -for choice to include lower, upper, numbers, and special characters

// generatePassword 
//    -take input from prompts as variables
//        -boolean to include numbers DONE
//        -boolean to include special characters DONE
//        -boolean to include lowercase letters DONE
//        -boolean to include uppercase letters DONE
//        -variable to store the length of the password DONE  

//    -depending on prompts, a new array containing all of the available choices DONE

//    - a for loop that iterates a number of times equal to the length of the password DONE
//        - each iteration, a character from the master array is added to the new password string
//        - random math method used to pick the character from master array. The multiplier to the Math.random is the total number of characters in the master array

//    - a while loop that contains an if statement; checks that there is at least 1 instance of every designated character type in the password
//        - if a character type is missing, the first index of the password is swapped out for the missing index. if the parameters are not met, the next index is replaced. process continues until all correct characters are present

function writePassword() {
  var passwordText = document.querySelector("#password");
  var masterBool = false;

  var numberOfCharacters = prompt('How many characters?');
  if (numberOfCharacters < 8 | numberOfCharacters > 128) {
    alert('Not within parameters. Password must be at least 8 characters, max 128 characters');
    return
  }
  // - figure out how to reset variable input if alert is pinged

  // Prompt variables
  // - figure out how to use .toLowercase method on the prompt variables DONE

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
      var lowerCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
      var upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split('');
      var numberArray = '1234567890'.split('');
      var masterCharacterArray = [];

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
            console.log(`${array} true`);
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

