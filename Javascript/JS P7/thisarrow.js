const Student={
    name:"A",
    roll:34,
    city:"akola",
    getInfo2:   function(){
        setTimeout(function(){
            console.log(this);
        },2000);
    },
    getInfo1: function(){
        setTimeout(()=>{
            console.log(this);
        },3000);
    }
};
Student.getInfo1();
Student.getInfo2();