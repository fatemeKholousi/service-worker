self.addEventListener('install',(event)=>{
    console.log('installed')
})

self.addEventListener('activate',(event)=>{
    console.log('activated')
})

// // Post Message
self.onmessage=function(){
    // console.log(message.data)
        let sum=0
        for(let i=0;i<10000;i++){
            sum+=i
        }
    
postMessage(sum)
}


