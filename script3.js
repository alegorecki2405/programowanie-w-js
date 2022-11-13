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
let firstPath = [];
let secoundPath = [];
let thirdPath = [];
let fourthPath = [];

let isRecording = false;
let currentRecordingPathName = "";

const generateSoundsInformation = () => {
    const soundsContainer = document.querySelector(".soundsHelperWrapper");
    sounds.forEach(sound => {
        const pTag = document.createElement("p");
        pTag.innerText = `${sound.key} - ${sound.name}`;
        soundsContainer.appendChild(pTag);
    })
}
generateSoundsInformation();

const playSingleSound= (key) => {
    const foundSound = sounds.find(sound => sound.key === key);
    const audio = new Audio(foundSound.path);
    audio.play();
    if(isRecording){
        switch(currentRecordingPathName) {
            case "firstPath":
                firstPath.push(foundSound);
                break;
            case "secoundPath":
                secoundPath.push(foundSound);
                break;
            case "thirdPath":
                thirdPath.push(foundSound);
                break;
            case "fourthPath":
                fourthPath.push(foundSound);
                break;
        }
    }
}

document.addEventListener('keydown', (event) => playSingleSound(event.key),false)


const recordsButtons = document.querySelectorAll(".pathWrapper__recordButton");

const startRecording= (event) => {
    if(isRecording){
        event.target.style.backgroundColor="gray";
        isRecording=false;
        currentRecordingPathName="";
    }else{
        const pathName = event.target.getAttribute("data-path");
        currentRecordingPathName = pathName;
        isRecording = true;
        event.target.style.backgroundColor="red";
    }

}
recordsButtons.forEach(btn => btn.addEventListener("click", startRecording))



const playWholePath= (index,list) => {
    if(list[index] === undefined){
        alert("Path is empty");
    }else{
        const audio = new Audio(list[index].path);
        audio.play().then((x) => {
            if(index < list.length - 1) {
                setTimeout(() => playWholePath(index + 1,list), 400);
            }
        })
    }
}


const playSelectedPath = (event) => {
    const pathName = event.target.getAttribute("data-path");
    switch(pathName) {
        case "firstPath":
            playWholePath(0,firstPath);
            break;
        case "secoundPath":
            playWholePath(0,secoundPath);
            break;
        case "thirdPath":
            playWholePath(0,thirdPath);
            break;
        case "fourthPath":
            playWholePath(0,fourthPath);
            break;
    }
}
const playButtons = document.querySelectorAll(".pathWrapper__playButton");
playButtons.forEach(btn => btn.addEventListener("click", playSelectedPath))



// clear path

const clearPath = (event) => {
    const pathName = event.target.getAttribute("data-path");
    event.target.parentElement.children[0].style.backgroundColor="#efefef";
    switch(pathName) {
        case "firstPath":
            firstPath =[];
            break;
        case "secoundPath":
            secoundPath =[];
            break;
        case "thirdPath":
            thirdPath =[];
            break;
        case "fourthPath":
            fourthPath =[];
            break;
    }

}
const clearButtons = document.querySelectorAll(".pathWrapper__clear");
clearButtons.forEach(btn => btn.addEventListener("click", clearPath))

const playAllPaths= () => {
    if(firstPath.length === 0 || secoundPath.length === 0 || thirdPath.length === 0 || fourthPath.length === 0){
        alert("One of the paths is empty");
    }else{
        playWholePath(0,firstPath);
        playWholePath(0,secoundPath);
        playWholePath(0,thirdPath);
        playWholePath(0,fourthPath);
    }
}