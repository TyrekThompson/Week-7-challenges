// assigned a variable to a prompt  
var character = prompt("Greetings ", "type here");
var upperCharacter = character.toUpperCase();
var lowerCharacter = character.toLocaleLowerCase();
// made conditionals to check for specific cases
if (character == upperCharacter) {
 document.write('Shouting');
 console.log('Shouting');
}
else if (character == lowerCharacter) {
 document.write('Whispering');
 console.log('Whispering');
}
else {
    document.write('Talking');
    console.log('Talking');
}