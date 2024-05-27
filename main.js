let passwordLenght = 8;
const rangInput = document.getElementById("rang");
const PasswordlenghtEl = document.getElementById("Passwordlenght");
const PasswordEl  = document.getElementById("Password");
const btnEl = document.getElementById("btn");
let upperCaseBol = false;
let symbolCaseBol = false;
let numberCaseBol = false;
const symbolsInput = document.getElementById("symbols");
const NumbersInput = document.getElementById("Numbers");
const uppercaseInput = document.getElementById("uppercase");



const generatePassword =(passLenght)=> {

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = upperCaseBol?"ABCDEFGHIJKLMNOPQRSTUVWXYZ":"";
const numbersCase =numberCaseBol?"0123456789":"";
const symbolsCase =symbolCaseBol?"!@#$%^&*()_+-=?></.,:';{}][|":"";

const passwordCon = lowerCase+ upperCase+ numbersCase +symbolsCase;

let password=[];

for(let i = 0;i < passLenght; i++){
const randomPassword = Math.floor(Math.random() * passwordCon.length);
password += passwordCon[randomPassword];
}

return password

}








const exportPassword = () => {

  upperCaseBol = uppercaseInput.checked;
  numberCaseBol = NumbersInput.checked;
  symbolCaseBol = symbolsInput.checked;

  console.log(symbolCaseBol)

  const password = generatePassword(passwordLenght);
  PasswordEl.innerHTML = password;
 

}


btnEl.addEventListener("click",exportPassword);



const copyPassword = (e) => {
  if(e.target.innerText.length>0){
    navigator.clipboard.writeText(PasswordEl.innerText).then(()=>{
      alert("Password Copied To The ClipBoard")
    })
  }
}


PasswordEl.addEventListener("click",copyPassword)


rangInput.addEventListener("input",(e) => {
console.log(e.target.value)

  const passwordLenghtFromtUser = +e.target.value;
  passwordLenght = passwordLenghtFromtUser;
  PasswordlenghtEl.innerHTML=passwordLenght;

})



