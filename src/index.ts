/*
* This program is a text reverser.
*
* @author  Felipe Garcia Affonso
* @version 1.0
* @since   2021-12-05
*/

import * as readline from 'readline';

function textReverser(s: string) {
    // this function is a text reverser function.
    if (s.length == 0)
    {
        return s;
    }
    else
    {
        var lastChar: string = s.substr(s.length - 1);
        var restOfStr: string = s.substr(0, s.length - 1);
        var returnStr: string = lastChar + textReverser(restOfStr);
        return returnStr;
    }
}

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Input a text to reverse: ", function(answer) {
    var text: string = textReverser(answer);
    console.log("The reverse of " + answer + " is " + text);
    rl.close();
});
