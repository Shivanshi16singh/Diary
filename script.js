let logBtn= document.querySelector("#login");
let regBtn= document.querySelector("#register");
let logSub= document.querySelector("#loginSubmit");
let regSub= document.querySelector("#registerSubmit");
let userLogin= document.querySelector("#loginUsername");
let pswLogin= document.querySelector("#loginPassword");
let userReg= document.querySelector("#regUsername");
let pswReg= document.querySelector("#regPassword");
let username;
let password;
let userArr= [];
let pswArr= [];
let logCont= document.querySelector(".logCont");
let regCont= document.querySelector(".regCont");
logBtn.addEventListener("click",()=>{
    logCont.classList.add("show");
    regCont.classList.remove("show");
});
regBtn.addEventListener("click",()=>{
    regCont.classList.add("show");
    logCont.classList.remove("show");
});
document.addEventListener("click",(e)=>{
    if (!e.target.closest(".regCont") && !e.target.closest(".logCont") && e.target !== logBtn && e.target !== regBtn){
        logCont.classList.remove("show");
        regCont.classList.remove("show");
    }
});
regSub.addEventListener("click",(e)=>{
    e.preventDefault();
    let newUser= userReg.value;
    let newPsw= pswReg.value;
    if (userArr.indexOf(newUser)!==-1) {
        alert("Username already exists! Please choose another.");
        return;
    }
    userArr.push(newUser);
    pswArr.push(newPsw);
    userReg.value="";
    pswReg.value="";
    alert("Registered successfully! You can now log in.");
});
logSub.addEventListener("click",(e)=>{
    e.preventDefault();
    username= userLogin.value;
    password= pswLogin.value;
    let userIndex= userArr.indexOf(username);
    if (userIndex=== -1){
        alert("Username not found! Kindly Register");
        return;
    }
    if (pswArr[userIndex]=== password){
        window.location.href = "home.html";
    } else{
        alert("Incorrect password. Please try again.");
    }
});