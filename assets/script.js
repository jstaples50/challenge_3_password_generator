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
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    var lowerCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split('');
      // - figure out how to use split with this var
    var numberArray = '1234567890'.split('');
    var masterCharacterArray = [];
    var newPassword = "";

    var numberOfCharacters = prompt('How many characters?');
    if (numberOfCharacters < 8 | numberOfCharacters > 128) {
      alert('Not within parameters. Password must be at least 8 characters, max 128 characters');
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


    // Master Array Function 
    // -figure out how to consolidate this code DONE

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
    
    function checkCharTypes() {
      
      function randomNum(variable) {
         Math.floor(Math.random() * variable.length);
      }

      function checkArray(array) {
        for (var i = 0; i < newPassword.length; i++) {
          if (array.includes(newPassword[i])) {
            return true;
          }
        }
      }

      if (choiceOfLower === 'y') {
        var boolean = checkArray(lowerCharacters);
        if (!boolean) {
          newPassword[randomNum(newPassword)] = lowerCharacters[randomNum(lowerCharacters)];
        }
      } 
      if (choiceOfUpper === 'y') {
        var boolean = checkArray(upperCharacters);
        if (!boolean) {
          newPassword[randomNum(newPassword)] = upperCharacters[randomNum(upperCharacters)];
        }
      } 
      if (choiceOfSpecial === 'y') {
        var boolean = checkArray(specialCharacters);
        if (!boolean) {
          newPassword[randomNum(newPassword)] = specialCharacters[randomNum(specialCharacters)];
        }
      } 
      if (choiceOfNumber === 'y') {
        var boolean = checkArray(numberArray);
        if (!boolean) {
          newPassword[randomNum(newPassword)] = lowerCharacters[randomNum(lowerCharacters)];
        }
      }
    }

    createMasterArray();
    addCharToPassword();
    checkCharTypes();
    return newPassword;
  };
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {

}

