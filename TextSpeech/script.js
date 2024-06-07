let speech =new SpeechSynthesisUtterance();
let voices=[];
let voiceSelect=document.querySelector("select");
let messages=["Be The Best you Can Be.",
    "Never Give Up!","This moment will be another story Someday","stay focused on you Goals",
    "Life goes on with or without, whoever or whatever",
    " Everything Feels better with some music",
    "You are doing better than you think you are",
    "It's okay to take a break","What is yours will always find you","Do what you Love , Love What you Do", 
    "What is coming is better than what has gone"
    
 ]

window.speechSynthesis.onvoiceschanged = ()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];

    voices.forEach((voice,i)=> voiceSelect.options[i]=new Option(voice.name,i) );
}

voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];
})
document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

document.getElementById("secret").addEventListener("click",()=>{
    speech.text=messages[Math.floor(Math.random() * messages.length)];;
    window.speechSynthesis.speak(speech);
})