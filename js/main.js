const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio("tunes/a.wav"); //by default, audio src is "a" tune

const playTune = (key)=>{
    audio.src = `tunes/${key}.wav`; //passing audio based on key pressed
    audio.play();//playing audio

    const clickKey = document.querySelector(`[data-key=${key}]`);
    clickKey.classList.add("active"); // adding active class to the clicked key element
    setTimeout(() => { //removing active key after 150ms
        clickKey.classList.remove("active");
    }, 150);
}


pianoKeys.forEach(key =>{
    allKeys.push(key.dataset.key); // adding data-key value to the allKeys array
    //Calling playTune function with passing data-key value as an argument
    key.addEventListener("click",()=>playTune(key.dataset.key))
     
});
const handleVolume = (e) =>{
    audio.volume = e.target.value; //passing the range slider value as an audio volume
}

const showHideKeys = () => {
    //toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}


const pressedKey = (e)=>{
    // if the pressed key is in the allKeys array, only call the playTune playTune function;
    if(allKeys.includes(e.key))
    playTune(e.key);
}
keysCheckbox.addEventListener("click",showHideKeys);
volumeSlider.addEventListener("input",handleVolume);
document.addEventListener("keydown",pressedKey)