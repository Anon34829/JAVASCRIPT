

var alphabet = "abcdefghilmnopqrstuvz";

var randomAlph = "";
var i = 0;


while(i < 7  ) {

    randomAlph += alphabet[ Math.floor(Math.random() * alphabet.length )];
    i++;
    
}

console.log(randomAlph);




/*

#2: Random String Generator
Make a random string generator. You’ll need to start with a
string containing all the letters in the alphabet:
var alphabet = "abcdefghijklmnopqrstuvwxyz";
To pick a random letter from this string, you can
update the code we used for the random insult generator in
Chapter 3: Math.floor(Math.random() * alphabet.length). This
will create a random index into the string. You can then use
square brackets to get the character at that index.
To create the random string, start with an empty string
(var randomString = ""). Then, create a while loop that will
continually add new random letters to this string, as long
as the string length is less than 6 (or any length you choose).
You could use the += operator to add a new letter to the end
of the string. After the loop has finished, log it to the console
to see your creation!

*/