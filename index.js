function shout(string) {
    return string.toUpperCase();
    
  }
  shout('hello'); // Returns 'HELLO'

function whisper(string) {
    return string.toLowerCase();
    //whisper ("hello");

}
whisper ("hello");

function logWhisper(string){
    console.log(string.toLowerCase());

}
logWhisper('Elvis');
function logShout(string){
    console.log(string.toUpperCase());
}
logShout('hello'); // Returns 'HELLO'

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    }
    if (string === string.toUpperCase()) {
      return "YES INDEED!";
    }
    if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
    return;
  }
  
 


