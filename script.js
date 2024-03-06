let signUpbtn=document.querySelector('.signupbtn');
let signInbtn=document.querySelector('.signinbtn');
let NameField=document.querySelector('.name-field');
let Title=document.querySelector('.title');
let underline=document.querySelector('.signUPline');
let text=document.querySelector('.text')





signInbtn.addEventListener('click',()=>{
NameField.style.maxHeight='0';
Title.innerHTML="Sign In";
signUpbtn.classList.add('disable');
signInbtn.classList.remove('disable');
underline.style.transform='translateX(35px)';
text.innerHTML="Forgot Password?";

})

signUpbtn.addEventListener('click',()=>{
    NameField.style.maxHeight='60px';
    Title.innerHTML="Sign Up";
    signUpbtn.classList.remove('disable');
    signInbtn.classList.add('disable');
    underline.style.transform='translateX(0)';
    text.innerHTML="Need Password Suggestions?";    
    })




// function show(){
//     if(data.type==="password"){
//         data.type="text"
//     }
//     else
//     {
//         data.type="password"
//     }
// }
 