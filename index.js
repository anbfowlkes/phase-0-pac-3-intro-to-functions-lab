function shout(a) {
    return a.toUpperCase();
}
function whisper(a) {
    return a.toLowerCase();
}
function sayHiToHeadphonedRoommate(a){
    if (a.toLowerCase() === a) {
        return a="I can't hear you!";
    }
    if (a.toUpperCase() === a) {
        return "YES INDEED!";
    }
    if (a === "Let's have dinner together!") {
        return "I would love to!";
    }
}
function logShout(a) {
    console.log(a.toUpperCase());
}
function logWhisper(a) {
    console.log(a.toLowerCase());
}

console.log(shout("hello"));