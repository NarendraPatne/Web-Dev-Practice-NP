let url="https://catfact.ninja/fact";
fetch(url)
.then((resp)=>{
    console.log(resp);
    // resp.json()
    // .then((data)=>{
    //     console.log(data);
    // })
    return resp.json();
})
.then((data)=>{
    console.log(data.fact);
    return fetch(url);
})
.then((resp)=>{
    return resp.json();
})
.then((data)=>{
    console.log(data.fact);
    return fetch(url);
})
.then((resp)=>{
    return resp.json();
})
.then((data)=>{
    console.log(data.fact);
})
.catch((err)=>{
    console.log("Error: ",err);
})