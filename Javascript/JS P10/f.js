let form=document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault(); // To prevent default actions
    // console.log("Form Submitted");
    // let user=document.querySelector("#user");
    // let pass=document.querySelector("#pass");
    // let user=form.elements[0];
    // let pass=form.elements[1];
     
    // console.log(user.value);
    // console.log(pass.value);
    // alert(`Hi! ${user.value}, your password is set to ${pass.value}`);
});
let user=document.querySelector("#user");
    user.addEventListener("change",function(){
    console.log("input changed");
    console.log("Final value:",user.value);
});
user.addEventListener("input",function(){
    console.log("Input Value changed");
    console.log("New Value:",user.value);
});