window.addEventListener('load', function () {





    //prompt for clicking the button
    document.querySelector('#button1').addEventListener('click', writePass);

    // vars for criteria
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialChar = ["!", "%", "&", "*", "@", "#", "$", "?", "_", "-"];
    var abcLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var abcUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    // vars for confirmed criteria
    var confirmLength = "";
    var confirmAbcUpper;
    var confirmAbcLower;
    var confirmNumber;
    var confirmSpecialChar;



    // prompt for password length selection
    function genPass() {
        var confirmLength = prompt("How long would you like the password, 8-128?");
        //loop for length correction
        while (confirmLength < 8 || confirmLength > 128) {
            alert("Your password must be 8-128 characters, Try again");
            var confirmLength = prompt("How long would you like the password, 8-128?");
        }

        alert("You've selected " + confirmLength + " characters!")

        //section for user selected parameters
        var confirmAbcUpper = confirm("Select OK if you want to include uppercase characters");
        var confirmAbcLower = confirm("Select OK if you want to include lowercase characters");
        var confirmNumber = confirm("Select OK if you want to include numbers");
        var confirmSpecialChar = confirm("Select OK fi you want to include special characters");

        while (confirmAbcUpper === false && confirmAbcLower === false && confirmNumber === false && confirmSpecialChar === false) {
            alert("Please select atleast one of the above password parameters");
            var confirmAbcUpper = confirm("Select OK if you want to include uppercase characters");
            var confirmAbcLower = confirm("Select OK if you want to include lowercase characters");
            var confirmNumber = confirm("Select OK if you want to include numbers");
            var confirmSpecialChar = confirm("Select OK fi you want to include special characters");
        }
        //adds each parameter selected and randomizes by length submitted
        var passwordChar = []

        if (confirmAbcUpper){
            passwordChar = passwordChar.concat(abcUpper)
        }
        if (confirmAbcLower){
            passwordChar = passwordChar.concat(abcLower)
        }
        if (confirmNumber){
            passwordChar = passwordChar.concat(number)
        }
        if (confirmSpecialChar){
            passwordChar = passwordChar.concat(specialChar)
        }
            console.log(passwordChar)
            
            
            var randoPass = ""

            for (var i = 0; i < confirmLength; i++) {
                randoPass= randoPass + passwordChar[Math.floor(Math.random() * passwordChar.length)];
                console.log(randoPass)
            }
            return randoPass;

    }
    //write the created password to the password box on the html
    function writePass() {
        var password = genPass();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;
        
    }

}, false)



