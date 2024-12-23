let inp=document.querySelector("input");
inp.addEventListener("keydown",function (event){
    // console.log("code",event.code);
    // console.log("Key",event.key);
    // console.log("Key pressed");
    if(event.code=="ArrowUp" || event.code=="KeyW")
    {
        console.log("Up");
    }else if(event.code=="ArrowDown" || event.code=="KeyS")
    {
        console.log("Down");
    }else if(event.code=="ArrowLeft" || event.code=="KeyA")
        {
        console.log("Left");
    }else if(event.code=="ArrowRight" || event.code=="KeyD")
        {
        console.log("Right");
    }
});
// inp.addEventListener("keyup",function (event){
//     console.log("Key released   ");
//     console.log(event);
// });