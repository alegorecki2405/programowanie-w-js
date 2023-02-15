const sounds = [
    {
        key: "1",
        name:"boom",
        path: "./sounds/boom.wav"
    },
    {
        key: "2",
        name:"clap",
        path: "./sounds/clap.wav"
    },
    {
        key: "3",
        name:"hihat",
        path: "./sounds/hihat.wav"
    },
    {
        key: "4",
        name:"kick",
        path: "./sounds/kick.wav"
    },
    {
        key: "5",
        name:"openhat",
        path: "./sounds/openhat.wav"
    },
    {
        key: "6",
        name:"ride",
        path: "./sounds/ride.wav"
    },
    {
        key: "7",
        name:"snare",
        path: "./sounds/snare.wav"
    },
    {
        key: "8",
        name:"tink",
        path: "./sounds/tink.wav"
    },
    {
        key: "9",
        name:"tom",
        path: "./sounds/tom.wav"
    }
]

let pathOne = [];
let pathTwo = [];
let pathThree = [];
let pathFour = [];

let recording = false;
let currentPath = "";


const playSound= (key) => {
    const sound = sounds.find(sound => sound.key === key);
    const audio = new Audio(sound.path);
    audio.play();
    if(isRecording){
        switch(currentRecordingPathName) {
            case "pathOne":
                pathOne.push(sound);
                break;
            case "pathTwo":
                pathTwo.push(sound);
                break;
            case "pathThree":
                pathThree.push(sound);
                break;
            case "pathFour":
                pathFour.push(sound);
                break;
        }
    }
}
document.addEventListener("keydown", (event) => playSound(event.key), false);