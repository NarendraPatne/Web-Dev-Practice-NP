let todo=[];
while(true)
    {
    let req=prompt("Enter your Command:");
    if(req=="quit")
    {
        console.log("--------------------------");
        console.log("Quitting!")
        break;
    }
    else if(req=="list")
        {
            console.log("--------------------------");
            for(let i=0;i<todo.length;i++)
                {
                    console.log(`Index: ${i} Task: ${todo[i]}`);
                }
                console.log("--------------------------");
                continue;
            }
            else if(req=="add")
            {
                    let t=prompt("Enter Task to add:");
                    todo.push(t);
                    console.log("Task Added!");
                    console.log("--------------------------");
                    continue;
                }
                else if(req=="delete")
                    {
                        let ind=prompt("Enter Index of Task:");
                        console.log(todo.splice(ind,1)+" || Task Deleted");
                        continue;
                    }
                    else{
                        console.log("Wrong Input Command!");    
                        continue;
                    }
}