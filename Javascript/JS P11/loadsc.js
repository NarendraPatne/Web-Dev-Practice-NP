const loadScript=(src)=>{
    let p=new Promise((resolve,reject)=>{
        let script=document.createElement("script");
        script.type="text/javascript";
        script.src=src;
        document.body.appendChild(script);
        script.onload=()=>{
            resolve(1);
        }
        script.onerror=()=>{
            reject(0);
        }
    })
    return p;
}

let x=loadScript("https://coe.jquery.com/jquery-3.3.1.slim.min.js");
x.then((value)=>{
    console.log(value);
}).catch((err)=>{
    console.log(err);
})
