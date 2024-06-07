const passwordBox=document.getElementById("password");
const buttonClick=document.getElementById("gen-btn");
const copyClick=document.getElementById("copy-btn");
const eyeIcon=document.getElementById("eyeicon");
const length=12;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase= "abcdefghijklmnopqrstuvwxxyz"
const number ="0123456789";
const symbol="@#%^&*()_+~|}{[]<>/-="

const allChars=upperCase+lowerCase+number+symbol;
function createPassword(){
    let password ="";
    password+=upperCase[Math.floor(Math.random() *upperCase.length)];
    password+=lowerCase[Math.floor(Math.random() *lowerCase.length)];
    password+=number[Math.floor(Math.random() *number.length)];
    password+=symbol[Math.floor(Math.random() *symbol.length)];
    while(length>password.length){
        password+=allChars[Math.floor(Math.random() *allChars.length)];
    }
    passwordBox.value=password;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

function HideShowPass(){
    if(passwordBox.type=="password"){
        passwordBox.type="text";
        eyeIcon.src="images/eye-open.png";
    }else{
        passwordBox.type="password";
        eyeIcon.src="images/eye-close.png";

    }
}

buttonClick.addEventListener("click",createPassword);
eyeIcon.addEventListener("click", HideShowPass);
copyClick.addEventListener("click",copyPassword)


