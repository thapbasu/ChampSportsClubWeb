const loginText = document.querySelector(".title-text .login");
const loginbox = document.querySelector("box.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("box .signup-link a");
signupBtn.onclick = (()=>{
   loginbox.style.marginLeft = "-50%";
   loginText.style.marginLeft = "-50%";
 });
 loginBtn.onclick = (()=>{
   loginbox.style.marginLeft = "0%";
   loginText.style.marginLeft = "0%";
 });
 signupLink.onclick = (()=>{
   signupBtn.click();
   return false;
 });