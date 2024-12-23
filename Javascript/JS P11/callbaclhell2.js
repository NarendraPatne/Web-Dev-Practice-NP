function saveDb(data,success,failure)
{
    let ispeed=Math.floor(Math.random()*10)+1;
    if(ispeed>4)
    {
        success();
    }else{
        failure();
    }
}
saveDb("A",()=>{
    console.log("Your data was saved");
    saveDb("B",()=>{
        console.log("Your data was saved");
        saveDb("C",()=>{
            console.log("Your data was saved.");
        },()=>{
            console.log("Slow Speed! Failed to Store Data");
        })
    },()=>{
        console.log("Slow Speed! Failed to Store data.");
    })
},()=>{
    console.log("Slow Speed! Failed to Store data.");
});